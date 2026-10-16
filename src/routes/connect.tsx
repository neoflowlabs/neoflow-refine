// src/routes/connect.tsx
// NeoFlow Labs — WhatsApp client onboarding (Embedded Signup v4)
// Route: https://neoflowlabs.com/connect

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/connect")({
  component: ConnectPage,
});

// ---- NeoFlow Automation Hub settings ----
const META_APP_ID = "995119653564886";
const ES_CONFIG_ID = "1474855131208336"; // WhatsApp Embedded Signup configuration (System-user token)
const GRAPH_VERSION = "v23.0"; // match the Graph API version shown in your App Dashboard

// Public values (safe to include in the website). Replace the two placeholders below.
const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string) || "https://njsjezrmwklrduwbxrkd.supabase.co";
const SUPABASE_ANON_KEY =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qc2plenJtd2tscmR1d2J4cmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2MzYxODMsImV4cCI6MjA5NTIxMjE4M30.IevcMM2uHQtuDMbxaCY9t29zAQzSNa7O0BWtows4wxI";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

type SessionInfo = { waba_id?: string; phone_number_id?: string; business_id?: string };
type Status = "idle" | "loading" | "connecting" | "saving" | "done" | "error";

function ConnectPage() {
  const [sdkReady, setSdkReady] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [coexistence, setCoexistence] = useState(true);
  const sessionInfo = useRef<SessionInfo>({});

  // 1. Load the Facebook JS SDK once
  useEffect(() => {
    if (window.FB) {
      setSdkReady(true);
      return;
    }
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: META_APP_ID,
        autoLogAppEvents: true,
        xfbml: false,
        version: GRAPH_VERSION,
      });
      setSdkReady(true);
    };
    const s = document.createElement("script");
    s.src = "https://connect.facebook.net/en_US/sdk.js";
    s.async = true;
    s.defer = true;
    s.crossOrigin = "anonymous";
    document.body.appendChild(s);
  }, []);

  // 2. Listen for the session info Meta posts back (WABA ID + phone number ID)
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.origin.endsWith("facebook.com")) return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.type !== "WA_EMBEDDED_SIGNUP") return;

        if (
          data.event === "FINISH" ||
          data.event === "FINISH_ONLY_WABA" ||
          data.event === "FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING"
        ) {
          sessionInfo.current = {
            waba_id: data.data?.waba_id,
            phone_number_id: data.data?.phone_number_id,
            business_id: data.data?.business_id,
          };
        } else if (data.event === "CANCEL") {
          setStatus("idle");
          setMessage(
            data.data?.current_step
              ? `Signup was cancelled at step: ${data.data.current_step}`
              : "Signup was cancelled."
          );
        } else if (data.event === "ERROR") {
          setStatus("error");
          setMessage(data.data?.error_message || "Meta reported an error during signup.");
        }
      } catch {
        // ignore non-JSON messages
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // 3. Send the code + IDs to the Supabase Edge Function
  const saveConnection = async (code: string) => {
    setStatus("saving");
    setMessage("Finishing setup…");

    // session info can arrive a moment after the login callback
    for (let i = 0; i < 20 && !sessionInfo.current.waba_id; i++) {
      await new Promise((r) => setTimeout(r, 250));
    }

    if (!sessionInfo.current.waba_id) {
      setStatus("idle");
      setMessage(
        "Signup wasn't completed — no WhatsApp account was connected. Please click Connect again and finish all steps, including adding your phone number."
      );
      return;
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/whatsapp-onboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          code,
          waba_id: sessionInfo.current.waba_id,
          phone_number_id: sessionInfo.current.phone_number_id,
          business_id: sessionInfo.current.business_id,
          business_name: businessName,
          coexistence,
        }),
      });
      const text = await res.text();
      let out: any = {};
      try {
        out = JSON.parse(text);
      } catch {
        throw new Error(
          `Server returned an unexpected response (HTTP ${res.status}). Check the Supabase URL and function name.`
        );
      }
      if (!res.ok) throw new Error(out?.error || `Setup failed (HTTP ${res.status})`);
      setStatus("done");
      setMessage("Your WhatsApp Business account is connected to NeoFlow Labs. Our team will be in touch to finish your automation setup.");
    } catch (e: any) {
      setStatus("error");
      setMessage(e.message || "Something went wrong while saving your connection.");
    }
  };

  // 4. Launch Embedded Signup
  const launchSignup = () => {
    if (!sdkReady) return;
    setStatus("connecting");
    setMessage("");
    sessionInfo.current = {};

    window.FB.login(
      (response: any) => {
        const code = response?.authResponse?.code;
        if (code) {
          saveConnection(code);
        } else {
          setStatus("idle");
          setMessage("Signup window was closed before finishing.");
        }
      },
      {
        config_id: ES_CONFIG_ID,
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
          sessionInfoVersion: "3",
          // Coexistence: keep using the WhatsApp Business app on the same number
          ...(coexistence ? { featureType: "whatsapp_business_app_onboarding" } : {}),
        },
      }
    );
  };

  const busy = status === "connecting" || status === "saving";

  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Connect your WhatsApp</h1>
      <p className="mt-3 text-muted-foreground">
        Connect your WhatsApp Business account to NeoFlow Labs so we can set up automated
        replies, order updates and reminders for your customers. You stay the owner of your
        account and can disconnect at any time.
      </p>

      <div className="mt-8 space-y-4 rounded-xl border p-6">
        <label className="block">
          <span className="text-sm font-medium">Business name</span>
          <input
            className="mt-1 w-full rounded-md border px-3 py-2"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g. Absons Exim (Pvt) Ltd"
          />
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1"
            checked={coexistence}
            onChange={(e) => setCoexistence(e.target.checked)}
          />
          <span className="text-sm">
            I already use the <strong>WhatsApp Business app</strong> on this number and want to
            keep using it alongside automation.
          </span>
        </label>

        <button
          onClick={launchSignup}
          disabled={!sdkReady || busy || !businessName.trim()}
          className="w-full rounded-md bg-[#1877F2] px-4 py-3 font-medium text-white disabled:opacity-50"
        >
          {!sdkReady ? "Loading…" : busy ? "Connecting…" : "Connect with Facebook"}
        </button>

        {message && (
          <p
            className={`text-sm ${
              status === "error" ? "text-red-600" : status === "done" ? "text-green-700" : ""
            }`}
          >
            {message}
          </p>
        )}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        By connecting, you agree to NeoFlow Labs managing your WhatsApp Business account on your
        behalf as described in our <a className="underline" href="/privacy-policy">Privacy Policy</a>.
      </p>
    </main>
  );
}
