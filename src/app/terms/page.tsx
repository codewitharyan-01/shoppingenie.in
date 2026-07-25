"use client"

import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"

const TOC = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "service", label: "2. Service Description" },
  { id: "usage", label: "3. Permitted Use" },
  { id: "responsibilities", label: "4. User Responsibilities" },
  { id: "intellectual-property", label: "5. Intellectual Property" },
  { id: "third-party", label: "6. Third-Party Links" },
  { id: "limitations", label: "7. Limitation of Liability" },
  { id: "changes", label: "8. Changes to Terms" },
  { id: "termination", label: "9. Termination" },
  { id: "governing-law", label: "10. Governing Law" },
  { id: "contact", label: "11. Contact" },
]

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      lastUpdated="July 25, 2026"
      tocItems={TOC}
    >
      <LegalSection id="acceptance" number={1} title="Acceptance of Terms">
        <p>
          By accessing or using ShoppinGenie (&quot;the Service&quot;), you agree to be
          bound by these Terms and Conditions. If you do not agree to all of
          these terms, you should not use the Service.
        </p>
        <p>
          These terms apply to all visitors, users, and anyone who accesses or
          uses the Service, whether through a web browser, mobile device, or any
          other means.
        </p>
      </LegalSection>

      <LegalSection id="service" number={2} title="Service Description">
        <p>
          ShoppinGenie is a deal discovery and price comparison platform. We
          aggregate publicly available pricing information from major Indian
          e-commerce platforms including Amazon India, Flipkart, Myntra, Shopsy,
          and others.
        </p>
        <p>
          The Service provides deal listings, price history charts, price-drop
          alerts, and curated deal recommendations. ShoppinGenie does not sell
          products directly. All purchases are completed on the respective
          third-party platform.
        </p>
      </LegalSection>

      <LegalSection id="usage" number={3} title="Permitted Use">
        <p>You may use ShoppinGenie for personal, non-commercial purposes. You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Scrape, crawl, or automatically collect data from the Service without prior written permission.</li>
          <li>Use the Service to mislead consumers about product pricing or availability.</li>
          <li>Attempt to interfere with, compromise, or disrupt the Service or its underlying infrastructure.</li>
          <li>Reproduce, distribute, or create derivative works from our content without authorization.</li>
        </ul>
      </LegalSection>

      <LegalSection id="responsibilities" number={4} title="User Responsibilities">
        <p>
          You are responsible for ensuring that any information you provide
          through the Service (such as contact forms or alert preferences) is
          accurate and up to date.
        </p>
        <p>
          You acknowledge that product prices, availability, and offers are
          determined by third-party platforms and may change at any time without
          notice. ShoppinGenie does not guarantee the accuracy of any pricing
          information at the time of your purchase.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" number={5} title="Intellectual Property">
        <p>
          All content on ShoppinGenie — including but not limited to text,
          graphics, logos, icons, algorithms, and software — is the property of
          ShoppinGenie or its content suppliers and is protected by Indian and
          international intellectual property laws.
        </p>
        <p>
          Product names, logos, and images displayed on the Service belong to
          their respective owners and are used for identification purposes only.
        </p>
      </LegalSection>

      <LegalSection id="third-party" number={6} title="Third-Party Links">
        <p>
          ShoppinGenie contains links to third-party websites (e.g., Amazon,
          Flipkart). These links are provided for your convenience and do not
          signify endorsement. We are not responsible for the content, privacy
          practices, or terms of any third-party website.
        </p>
        <p>
          When you click a deal link, you may be redirected through an affiliate
          link. Please see our{" "}
          <a href="/disclosure" className="text-primary underline underline-offset-2 font-medium">
            Disclosure page
          </a>{" "}
          for details on how affiliate relationships work.
        </p>
      </LegalSection>

      <LegalSection id="limitations" number={7} title="Limitation of Liability">
        <p>
          ShoppinGenie is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We
          make no warranties, expressed or implied, regarding the accuracy,
          reliability, or availability of the Service.
        </p>
        <p>
          To the fullest extent permitted by law, ShoppinGenie shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of the Service, including but
          not limited to incorrect pricing information, missed deals, or failed
          alerts.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={8} title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms at any time. When we do, we
          will update the &quot;Last updated&quot; date at the top of this page. Your
          continued use of the Service after changes constitutes acceptance of
          the new terms.
        </p>
        <p>
          For significant changes, we will make reasonable efforts to notify you
          via email or an in-app notice.
        </p>
      </LegalSection>

      <LegalSection id="termination" number={9} title="Termination">
        <p>
          We may suspend or terminate your access to the Service at any time,
          without prior notice or liability, for any reason, including if you
          breach these Terms.
        </p>
        <p>
          Upon termination, your right to use the Service will immediately
          cease. Sections that by their nature should survive termination will
          survive, including ownership provisions, warranty disclaimers, and
          limitations of liability.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" number={10} title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising from or relating to these Terms or
          the Service shall be subject to the exclusive jurisdiction of the
          courts located in Bengaluru, Karnataka.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={11} title="Contact">
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us:
        </p>
        <ul className="list-none space-y-1">
          <li>
            <strong>Email:</strong> legal@shoppingenie.in
          </li>
          <li>
            <strong>Address:</strong> ShoppinGenie, Bengaluru, Karnataka, India
          </li>
        </ul>
        <p>
          You can also reach us through our{" "}
          <a href="/contact" className="text-primary underline underline-offset-2 font-medium">
            Contact page
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
