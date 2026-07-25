"use client"

import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"

const TOC = [
  { id: "information-collection", label: "1. Information We Collect" },
  { id: "use-of-data", label: "2. How We Use Your Data" },
  { id: "cookies", label: "3. Cookies and Tracking" },
  { id: "third-party", label: "4. Third-Party Services" },
  { id: "data-security", label: "5. Data Security & Retention" },
  { id: "user-rights", label: "6. Your Rights" },
  { id: "childrens-privacy", label: "7. Children's Privacy" },
  { id: "changes", label: "8. Changes to this Policy" },
  { id: "contact", label: "9. Contact Us" },
]

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="July 25, 2026"
      tocItems={TOC}
    >
      <LegalSection id="information-collection" number={1} title="Information We Collect">
        <p>
          At ShoppinGenie, we believe in collecting only what is necessary to provide you with the best deal discovery experience. The types of information we collect include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Information you provide:</strong> When you create an account, set a price alert, or contact us, you may provide your email address, name, or phone number (for WhatsApp alerts).</li>
          <li><strong>Usage data:</strong> We automatically collect information on how you interact with our service, such as the pages you visit, deals you click on, and your search queries.</li>
          <li><strong>Device information:</strong> We may collect data about the device you use to access ShoppinGenie, including your IP address, browser type, and operating system.</li>
        </ul>
      </LegalSection>

      <LegalSection id="use-of-data" number={2} title="How We Use Your Data">
        <p>
          We use the information we collect to operate, maintain, and improve our services. Specifically, we use your data to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Send you requested price-drop alerts and notifications.</li>
          <li>Personalize your experience and recommend relevant deals.</li>
          <li>Analyze usage trends to improve our algorithms and platform performance.</li>
          <li>Communicate with you regarding support, updates, or changes to our policies.</li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies" number={3} title="Cookies and Tracking">
        <p>
          ShoppinGenie uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our site.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some features of our Service (such as keeping you logged in) may not function properly.
        </p>
      </LegalSection>

      <LegalSection id="third-party" number={4} title="Third-Party Services">
        <p>
          We may employ third-party companies and individuals to facilitate our Service (e.g., analytics providers, email delivery services). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
        <p>
          Please note that when you click on a deal and are redirected to an e-commerce platform (like Amazon or Flipkart), their privacy policies will govern the collection and use of your data on their sites.
        </p>
      </LegalSection>

      <LegalSection id="data-security" number={5} title="Data Security & Retention">
        <p>
          The security of your data is important to us. We use commercially reasonable security measures to protect your personal information against unauthorized access or disclosure.
        </p>
        <p>
          We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements.
        </p>
      </LegalSection>

      <LegalSection id="user-rights" number={6} title="Your Rights">
        <p>
          Depending on your location, you may have certain rights regarding your personal data, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The right to access, update, or delete the information we have on you.</li>
          <li>The right to opt-out of marketing communications or price alerts at any time.</li>
          <li>The right to request a copy of your personal data in a structured, machine-readable format.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at privacy@shoppingenie.in.
        </p>
      </LegalSection>

      <LegalSection id="childrens-privacy" number={7} title="Children's Privacy">
        <p>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us so that we can take necessary actions.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={8} title="Changes to this Policy">
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={9} title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact our privacy team:
        </p>
        <ul className="list-none space-y-1">
          <li>
            <strong>Email:</strong> privacy@shoppingenie.in
          </li>
          <li>
            <strong>Address:</strong> ShoppinGenie Privacy Office, Bengaluru, Karnataka, India
          </li>
        </ul>
      </LegalSection>
    </LegalPageLayout>
  )
}
