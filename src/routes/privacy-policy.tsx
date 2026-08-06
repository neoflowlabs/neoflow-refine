import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — NeoFlow Labs" },
      { name: "description", content: "How NeoFlow Labs collects, uses, and protects data across our automation and WhatsApp messaging systems." },
      { property: "og:title", content: "Privacy Policy — NeoFlow Labs" },
      { property: "og:description", content: "How NeoFlow Labs collects, uses, and protects data across our automation and WhatsApp messaging systems." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl">Privacy <span className="font-display-italic text-gradient-accent">Policy</span></h1>
          <p className="mt-6 text-sm text-muted-foreground">Last updated: August 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10 text-muted-foreground leading-relaxed text-base">
          <p>
            NeoFlow Labs Pvt Ltd ("NeoFlow," "we," "us," or "our") is a digital automation and workflow systems agency based in Gampaha, Sri Lanka (Reg No: PV00347999). We build workflow automation, WhatsApp messaging, and business systems for our clients. This Privacy Policy explains how we collect, use, store, and protect information when we operate these systems, including our use of the WhatsApp Business Platform and Meta's APIs as a registered Meta Tech Provider.
          </p>
          <p>This policy applies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Businesses ("Clients") who engage NeoFlow to build and operate automation systems on their behalf</li>
            <li>Individuals ("End Users") who interact with our Clients' automated systems, including via WhatsApp</li>
          </ul>

          <div>
            <h2 className="text-2xl text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-3">Depending on the specific service, we may collect and process:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-foreground">Business account information:</span> WhatsApp Business Account (WABA) identifiers, phone number identifiers, and access tokens granted to us by Clients via Meta's Embedded Signup flow.</li>
              <li><span className="text-foreground">Message content and metadata:</span> messages sent and received through Client WhatsApp numbers, including timestamps, delivery status, and message templates, for the purpose of operating automated workflows (e.g. order confirmations, customer support, booking management).</li>
              <li><span className="text-foreground">End-user contact information:</span> phone numbers and names of individuals who message our Clients' businesses, where necessary to deliver the automated service.</li>
              <li><span className="text-foreground">Operational business data:</span> information Clients provide to configure their systems, such as product catalogs, pricing, staff details, and workflow rules.</li>
            </ul>
            <p className="mt-3">We do not collect more data than is necessary to operate the specific automation systems we have been engaged to build.</p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-4">2. How We Use Information</h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate WhatsApp-based automation on behalf of our Clients (e.g. responding to inquiries, confirming orders, sending notifications)</li>
              <li>Route and process business workflows through our automation infrastructure (built using tools such as n8n, Supabase, and the Meta WhatsApp Cloud API)</li>
              <li>Maintain and troubleshoot the systems we build and operate</li>
              <li>Fulfil our obligations as a Meta Tech Provider, including complying with Meta's Platform Terms and WhatsApp Business Messaging Policy</li>
            </ul>
            <p className="mt-3">We do not use Client or End User data for advertising, and we do not sell personal data to third parties.</p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-4">3. How We Store and Protect Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access tokens, business account identifiers, and related credentials are stored in access-controlled databases (Supabase) with restricted administrative access.</li>
              <li>Automated workflows (built in n8n) process data only as required to perform the specific task configured for each Client and do not retain data beyond what is operationally necessary.</li>
              <li>Infrastructure is hosted on Hetzner Cloud servers, with per-client isolation where applicable.</li>
              <li>We apply reasonable technical and organizational measures to protect data against unauthorized access, alteration, disclosure, or destruction.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-4">4. Sharing of Information</h2>
            <p className="mb-3">We do not sell or rent personal data. We may share information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With the Client on whose behalf the data was collected, as part of delivering the contracted service</li>
              <li>With sub-processors strictly necessary to operate the service (e.g. Meta/WhatsApp Cloud API, hosting providers), solely for the purpose of providing that service</li>
              <li>Where required by Sri Lankan law or a valid legal request</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-4">5. Data Retention</h2>
            <p>
              We retain data only for as long as necessary to provide services to our Clients or as required by our service agreements and applicable law. Clients may request deletion of data associated with their account by contacting us directly. Upon termination of a service agreement, NeoFlow's access to a Client's WhatsApp Business Account is removed, and any locally stored operational data is deleted within a reasonable period unless retention is required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-4">6. Your Rights</h2>
            <p>
              Depending on applicable law, individuals may have the right to request access to, correction of, or deletion of their personal data. Requests can be directed to the contact details below. As NeoFlow typically processes End User data on behalf of a Client business, we may direct certain requests to the relevant Client where they are the data controller.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-4">7. Meta Platform Data</h2>
            <p>
              Where NeoFlow accesses data through Meta's APIs (including WhatsApp Business Platform data) as a registered Tech Provider, we handle that data in accordance with Meta's Platform Terms and Developer Policies, in addition to this Privacy Policy. We only request the minimum permissions necessary to deliver the automation services our Clients have engaged us for, and access is granted explicitly by each Client through Meta's Embedded Signup process.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be reflected by updating the "Last updated" date above.</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl text-foreground mb-4">9. Contact Us</h2>
            <p className="mb-2">For questions about this Privacy Policy or to make a data-related request, contact:</p>
            <p className="text-foreground">NeoFlow Labs Pvt Ltd</p>
            <p>Gampaha, Sri Lanka</p>
            <p>Reg No: PV00347999</p>
            <p>Email: neoflowlabs@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
