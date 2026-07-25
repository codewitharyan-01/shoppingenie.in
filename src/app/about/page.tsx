"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  TrendingDown,
  Bell,
  Search,
  Eye,
  Zap,
  Users,
  Heart,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// --- Animation helpers ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

// --- Reusable section wrapper ---
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">{children}</div>
    </section>
  )
}

// --- Small label above headings ---
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[var(--accent-magic)] font-bold tracking-[0.2em] uppercase text-xs mb-4">
      {children}
    </span>
  )
}

// --- Page ---
export default function AboutPage() {
  return (
    <div className="flex-1 bg-background">
      {/* ═══════════════════════════════════════════════
          1. SPLIT HERO
      ═══════════════════════════════════════════════ */}
      <section className="min-h-[85vh] grid md:grid-cols-2 overflow-hidden">
        {/* Left — copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-20 md:py-0"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Our Story</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-8"
          >
            Real discounts.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-glow)] to-[var(--accent-magic)]">Zero gimmicks.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10"
          >
            ShoppinGenie helps millions of Indian shoppers cut through fake
            markups, inflated MRPs, and misleading "sale" tags — so the only
            deals you see are the ones genuinely worth your money.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base gap-2 bg-foreground text-background hover:bg-[var(--accent-magic)] transition-colors"
              onClick={() =>
                document
                  .getElementById("mission")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn How We Do It <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right — abstract product motif */}
        <div className="hidden md:flex items-center justify-center bg-[var(--accent-glow)]/5 relative overflow-hidden">
          {/* Decorative grid of deal-cards silhouettes */}
          <div className="absolute inset-0 opacity-[0.04]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-xl border-2 border-foreground"
                style={{
                  width: `${120 + (i % 3) * 40}px`,
                  height: `${150 + (i % 4) * 30}px`,
                  top: `${(i * 73) % 80}%`,
                  left: `${(i * 47) % 80}%`,
                  transform: `rotate(${-6 + (i % 5) * 3}deg)`,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 text-center space-y-6"
          >
            <div className="w-28 h-28 rounded-3xl bg-[var(--accent-magic)]/10 border-2 border-[var(--accent-magic)]/20 mx-auto flex items-center justify-center">
              <Sparkles className="h-14 w-14 text-[var(--accent-magic)]" />
            </div>
            <p className="text-xl font-bold tracking-tight">ShoppinGenie</p>
            <p className="text-sm text-muted-foreground max-w-[220px] mx-auto leading-relaxed">
              AI-powered deal intelligence for every Indian shopper.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. MISSION
      ═══════════════════════════════════════════════ */}
      <Section className="bg-muted/20 border-y" >
        <div id="mission" className="scroll-mt-24" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Mission</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight mb-8"
          >
            Make every rupee count.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed mb-4"
          >
            Indian e-commerce is full of noise — inflated MRPs before a "sale,"
            rotating coupon codes that barely work, and flash deals that
            disappear before you blink. We built ShoppinGenie to be the honest
            layer between you and those platforms.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our AI monitors real-time prices across Amazon, Flipkart, Myntra,
            and more — surfacing only the offers where you&apos;re genuinely
            saving money, not falling for a manufactured discount.
          </motion.p>
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          3. VALUES — Icon blocks
      ═══════════════════════════════════════════════ */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>What We Believe</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight"
          >
            Four principles that guide everything
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Eye,
              title: "Radical Transparency",
              body: "We show you the price history — the full curve, not just today's tag. If a 'discount' is fake, you'll know.",
            },
            {
              icon: ShieldCheck,
              title: "Verified First",
              body: "Every deal is cross-checked against live pricing before we show it. Expired or inflated listings never make the cut.",
            },
            {
              icon: Heart,
              title: "User-First Design",
              body: "No dark patterns, no urgency tricks. If a deal is good, the data speaks for itself — no countdown timers needed.",
            },
            {
              icon: Zap,
              title: "Speed & Simplicity",
              body: "Find what you need in seconds, not minutes. Clean filters, instant search, one-tap access to live offers.",
            },
          ].map((value) => (
            <motion.div key={value.title} variants={fadeUp}>
              <div className="h-full text-center p-8 glass-panel rounded-[2rem] hover:scale-[1.02] transition-all cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          4. WHAT MAKES US DIFFERENT — Alternating rows
      ═══════════════════════════════════════════════ */}
      <Section className="bg-muted/20 border-y">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Why ShoppinGenie</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight"
          >
            Not another coupon directory
          </motion.h2>
        </motion.div>

        <div className="space-y-20">
          {[
            {
              icon: TrendingDown,
              title: "Historical Price Intelligence",
              body: "We track prices over weeks and months so you can see whether today's 'deal' is a real drop — or just the everyday price with a new label.",
              points: [
                "30-day price curves on every product",
                "Instant flag when MRP is inflated before a sale",
                "Genuine 'lowest-ever' markers backed by data",
              ],
            },
            {
              icon: Search,
              title: "Cross-Platform Discovery",
              body: "Stop checking four apps. We aggregate the best offers across Amazon, Flipkart, Myntra, Shopsy, and more — so the best price finds you.",
              points: [
                "One search across every major Indian platform",
                "Side-by-side pricing comparison",
                "Platform-specific coupon stacking tips",
              ],
            },
            {
              icon: Bell,
              title: "Smart Price-Drop Alerts",
              body: "Set a target price for any product. When it drops — whether during a sale event or a quiet Tuesday — we'll ping you instantly.",
              points: [
                "Custom thresholds per product",
                "Instant push & email notifications",
                "Weekly digest of tracked items approaching your target",
              ],
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:direction-rtl" : ""
              }`}
            >
              <motion.div
                variants={fadeUp}
                className={index % 2 !== 0 ? "md:order-2" : ""}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.body}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className={`bg-secondary/30 rounded-2xl min-h-[260px] flex items-center justify-center ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <feature.icon className="h-20 w-20 text-muted-foreground/20" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════
          5. WHO WE SERVE
      ═══════════════════════════════════════════════ */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Built For</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight"
          >
            Every kind of smart shopper
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Users,
              label: "Families",
              desc: "Monthly grocery and essentials budgets that need to stretch further.",
            },
            {
              icon: Target,
              label: "Bargain Hunters",
              desc: "Power shoppers who wait for the right moment to pull the trigger on big purchases.",
            },
            {
              icon: Zap,
              label: "Busy Professionals",
              desc: "People who value their time and want the best price without endless tab-switching.",
            },
          ].map((persona) => (
            <motion.div key={persona.label} variants={fadeUp}>
              <div className="h-full p-8 glass-panel rounded-[2rem] hover:scale-[1.02] transition-all cursor-default text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <persona.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{persona.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {persona.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          6. TRUST SIGNALS
      ═══════════════════════════════════════════════ */}
      <Section className="bg-muted/20 border-y">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Trust</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight"
          >
            Why shoppers trust us
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { stat: "100%", label: "Verified Offers", sub: "Every deal is checked against live pricing before it's shown." },
            { stat: "30-day", label: "Price Transparency", sub: "Full price curves so you know if a discount is genuine." },
            { stat: "Instant", label: "Price-Drop Alerts", sub: "Set a target, and we'll notify you the moment it's hit." },
          ].map((signal) => (
            <motion.div
              key={signal.label}
              variants={fadeUp}
              className="text-center space-y-3"
            >
              <p className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                {signal.stat}
              </p>
              <p className="font-bold text-lg">{signal.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                {signal.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          7. FOUNDER NOTE
      ═══════════════════════════════════════════════ */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>From Our Founder</Eyebrow>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 mx-auto mb-8 flex items-center justify-center"
          >
            <span className="text-3xl font-black text-primary">S</span>
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 italic mb-8"
          >
            "I built ShoppinGenie because I was tired of falling for fake
            discounts. The idea is simple: if a deal is real, show the data. If
            it&apos;s not, don&apos;t show it at all. That&apos;s still the rule we follow
            every single day."
          </motion.blockquote>

          <motion.div variants={fadeUp}>
            <p className="font-bold text-lg">The ShoppinGenie Team</p>
            <p className="text-sm text-muted-foreground">
              Building from India, for India 🇮🇳
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          8. CTA FOOTER
      ═══════════════════════════════════════════════ */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="container mx-auto px-4 max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight mb-6"
          >
            Start saving smarter today
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg opacity-80 mb-10 max-w-lg mx-auto"
          >
            Browse today&apos;s verified deals, track prices on products you care
            about, and never overpay again.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full h-14 px-8 text-base font-bold gap-2"
              onClick={() => (window.location.href = "/deals")}
            >
              Browse Deals <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              onClick={() => (window.location.href = "/top-deals")}
            >
              View Top Picks
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
