"use client"

import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"
import { ShieldCheck, Search, Banknote, Clock } from "lucide-react"

const TOC = [
  { id: "summary", label: "Disclosure Summary" },
  { id: "affiliate-links", label: "1. Affiliate Links & How We Earn" },
  { id: "editorial-independence", label: "2. Editorial Independence" },
  { id: "pricing-accuracy", label: "3. Pricing Accuracy & Changes" },
  { id: "deal-availability", label: "4. Deal Availability & Stock" },
  { id: "verification", label: "5. Our Verification Policy" },
]

export default function DisclosurePage() {
  return (
    <LegalPageLayout
      title="How We Operate (Disclosure)"
      lastUpdated="July 25, 2026"
      tocItems={TOC}
    >
      <section id="summary" className="scroll-mt-24 mb-14">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8">
          <h2 className="text-xl font-bold tracking-tight mb-3 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" /> The Short Version
          </h2>
          <p className="text-foreground leading-relaxed">
            ShoppinGenie is a free tool designed to help you find the best prices. To keep it free, we may earn a small commission when you click on our links and make a purchase. However, <strong>this never impacts which deals we show or how we rank them</strong>. Our algorithm prioritizes data, price drops, and historical trends over payouts.
          </p>
        </div>
      </section>

      <LegalSection id="affiliate-links" number={1} title="Affiliate Links & How We Earn">
        <p>
          Running a real-time price tracking engine requires significant server and development resources. To fund ShoppinGenie, we participate in various affiliate marketing programs.
        </p>
        <p>
          This means that when you click on links to various merchants on this site and make a purchase, this can result in a commission that is credited to ShoppinGenie. Some of our primary affiliate partners include Amazon Associates, Flipkart Affiliate Program, and others.
        </p>
        <p>
          <strong>You do not pay anything extra.</strong> The price you pay is exactly the same whether you use our affiliate link or go directly to the vendor&apos;s website.
        </p>
      </LegalSection>

      <LegalSection id="editorial-independence" number={2} title="Editorial Independence">
        <p>
          Our loyalty is to you, the shopper. We have built our systems to ensure that affiliate partnerships do not influence our deal curation.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data-Driven Rankings:</strong> Deals on the &quot;Top Deals&quot; and &quot;Discovery&quot; pages are ranked automatically by our algorithms based on discount percentage, historical lows, and user engagement.</li>
          <li><strong>No Paid Placements:</strong> We do not accept payment from brands or platforms to feature a sub-par deal prominently.</li>
          <li><strong>We Show Non-Affiliate Deals:</strong> If the best price for a product is on a platform we have no affiliate relationship with, we will still show it to you.</li>
        </ul>
      </LegalSection>

      <LegalSection id="pricing-accuracy" number={3} title="Pricing Accuracy & Changes">
        <p>
          E-commerce prices fluctuate wildly, sometimes changing multiple times within an hour. While our systems poll for updates frequently (often every 15 minutes), there can be a delay between a price changing on the retailer&apos;s site and our site updating.
        </p>
        <p>
          Therefore, <strong>we cannot guarantee that the price shown on ShoppinGenie will always perfectly match the live price</strong> at the exact moment you click. The final price you see at checkout on the retailer&apos;s website is the definitive price.
        </p>
      </LegalSection>

      <LegalSection id="deal-availability" number={4} title="Deal Availability & Stock">
        <p>
          The best deals tend to sell out the fastest. We do our best to remove or flag deals that have gone out of stock, but high-demand items can disappear in minutes. 
        </p>
        <p>
          If you encounter a deal that is out of stock or has expired, you can use the &quot;Report&quot; function on the deal card (coming soon) to help us keep the platform clean for everyone.
        </p>
      </LegalSection>

      <LegalSection id="verification" number={5} title="Our Verification Policy">
        <p>
          We employ automated systems and manual checks to verify the legitimacy of discounts. We compare current sale prices against 30-day historical averages to identify and filter out &quot;manufactured discounts&quot; (where a seller inflates the MRP right before a sale).
        </p>
        <p>
          While we strive for 100% accuracy in our verification process, clever pricing manipulation by third-party sellers can occasionally slip through. If you spot a fake deal, please contact us.
        </p>
      </LegalSection>

    </LegalPageLayout>
  )
}
