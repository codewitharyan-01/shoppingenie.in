"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReasonTag } from "@/components/ui/reason-tag"
import { type Deal } from "./types"

interface RankedDealItemProps {
  deal: Deal
  index: number
}

export function RankedDealItem({ deal, index }: RankedDealItemProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Create a heat meter based on deal strength (1-5)
  const renderDealStrength = (strength?: number) => {
    const s = strength || 3
    return (
      <div className="flex gap-1 items-center mt-2" title={`Deal Strength: ${s}/5`}>
        {[1, 2, 3, 4, 5].map((level) => (
          <div 
            key={level} 
            className={`h-1.5 w-6 rounded-full ${
              level <= s 
                ? (s >= 4 ? "bg-orange-500" : s === 3 ? "bg-yellow-500" : "bg-emerald-500") 
                : "bg-muted"
            }`} 
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="flex flex-col md:flex-row overflow-hidden hover:border-primary/40 transition-colors group">
        
        {/* Rank & Image (Mobile: Stacked, Desktop: Row) */}
        <div className="flex md:w-[30%] shrink-0">
          <div className="bg-muted w-16 md:w-20 shrink-0 flex flex-col items-center justify-center border-r">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Rank</span>
            <span className="text-3xl md:text-4xl font-black text-foreground">#{index + 1}</span>
          </div>
          <div className="bg-secondary/20 flex-1 relative min-h-[120px] md:min-h-full flex items-center justify-center overflow-hidden">
            {deal.imageUrl && deal.imageUrl !== "placeholder" ? (
              <img src={deal.imageUrl} alt={deal.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <span className="text-muted-foreground text-xs relative z-10">{deal.category} Image</span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-start md:items-center">
          
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{deal.platform}</span>
              {deal.reason && <ReasonTag reason={deal.reason} />}
            </div>
            
            <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors">
              {deal.title}
            </h3>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              {renderDealStrength(deal.dealStrength)}
              <span className="text-xs text-muted-foreground hidden sm:inline-block">•</span>
              <span className="text-xs text-muted-foreground">Posted {deal.postedAt}</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 md:gap-2 border-t md:border-t-0 pt-4 md:pt-0">
            <div className="flex flex-row md:flex-col items-end gap-2 md:gap-0">
              <span className="text-2xl font-black tracking-tight">{formatPrice(deal.currentPrice)}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">{formatPrice(deal.originalPrice)}</span>
                <span className="text-xs font-bold text-destructive bg-destructive/10 px-1.5 py-0.5 rounded">
                  -{deal.discountPercentage}%
                </span>
              </div>
            </div>
            <Button 
              size="sm" 
              className="gap-1.5 md:mt-2"
              onClick={() => window.open(deal.url, "_blank")}
            >
              Get <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
          
        </div>
      </Card>
    </motion.div>
  )
}
