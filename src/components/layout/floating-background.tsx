"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  ShoppingBag, Tag, Headphones, Smartphone, Watch, Gift,
  CreditCard, Box, Percent, Shirt, Glasses, Coffee,
  Star, Heart, Gem, Laptop
} from "lucide-react"

const floatingItems = [
  { Icon: ShoppingBag, top: "8%", left: "6%", delay: 0, duration: 40, size: 44 },
  { Icon: Tag, top: "55%", left: "3%", delay: 3, duration: 45, size: 28 },
  { Icon: Headphones, top: "14%", right: "12%", delay: 6, duration: 38, size: 52 },
  { Icon: Smartphone, top: "68%", right: "8%", delay: 2, duration: 42, size: 36 },
  { Icon: Watch, top: "38%", left: "18%", delay: 10, duration: 50, size: 32 },
  { Icon: Gift, top: "82%", left: "25%", delay: 5, duration: 44, size: 40 },
  { Icon: CreditCard, top: "30%", right: "22%", delay: 8, duration: 36, size: 30 },
  { Icon: Box, top: "12%", right: "35%", delay: 4, duration: 48, size: 38 },
  { Icon: Percent, top: "48%", left: "7%", delay: 7, duration: 43, size: 26 },
  { Icon: Shirt, top: "22%", left: "42%", delay: 12, duration: 41, size: 42 },
  { Icon: Glasses, top: "72%", right: "18%", delay: 1, duration: 46, size: 34 },
  { Icon: Coffee, top: "18%", right: "28%", delay: 14, duration: 39, size: 30 },
  { Icon: Star, top: "62%", left: "35%", delay: 9, duration: 47, size: 24 },
  { Icon: Heart, top: "85%", right: "35%", delay: 11, duration: 37, size: 28 },
  { Icon: Gem, top: "45%", right: "5%", delay: 6, duration: 52, size: 32 },
  { Icon: Laptop, top: "5%", left: "28%", delay: 15, duration: 44, size: 36 },
]

export function FloatingBackground() {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Very soft ambient orbs */}
      <div className="absolute top-[-15%] left-[-15%] w-[55%] h-[55%] rounded-full bg-[var(--accent-magic)]/[0.03] blur-[160px]" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[55%] h-[55%] rounded-full bg-[var(--accent-glow)]/[0.03] blur-[160px]" />
      <div className="absolute top-[35%] left-[50%] w-[35%] h-[35%] rounded-full bg-secondary/30 blur-[120px]" />
      
      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Floating Icons — Desktop only */}
      <div className="hidden md:block">
        {floatingItems.map((item, i) => (
          <FloatingIcon key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

function FloatingIcon({
  Icon,
  top,
  left,
  right,
  delay,
  duration,
  size,
}: {
  Icon: any
  top: string
  left?: string
  right?: string
  delay: number
  duration: number
  size: number
}) {
  return (
    <motion.div
      className="absolute text-foreground/[0.025]"
      style={{ top, left, right }}
      initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: [0, -50, 10, -30, 0],
        x: [0, 20, -15, 10, 0],
        rotate: [0, 8, -5, 3, 0],
        opacity: [0, 0.8, 0.6, 0.9, 0],
      }}
      transition={{
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: duration * 1.3, repeat: Infinity, ease: "easeInOut", delay: delay + 2 },
        rotate: { duration: duration * 1.6, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: duration * 1.8, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <Icon size={size} strokeWidth={0.8} />
    </motion.div>
  )
}
