"use client"

import * as React from "react"
import { ExternalLink, ShieldCheck, Flame, Info } from "lucide-react"
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip, XAxis } from "recharts"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Deal } from "./types"

interface DealModalProps {
  deal: Deal | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DealModal({ deal, open, onOpenChange }: DealModalProps) {
  if (!deal) return null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="bg-muted relative h-64 md:h-full min-h-[300px]">
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
               <span className="text-muted-foreground">{deal.category} Image</span>
            </div>
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge className="bg-destructive text-white font-bold px-3 py-1 text-base">
                {deal.discountPercentage}% OFF
              </Badge>
              {deal.urgencyLevel === "high" && (
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 gap-1 backdrop-blur-md">
                  <Flame className="h-4 w-4" /> Hot Deal
                </Badge>
              )}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="p-6 flex flex-col h-full max-h-[80vh] overflow-y-auto">
            <DialogHeader className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-muted-foreground">{deal.platform}</Badge>
                {deal.isVerified && (
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">
                    <ShieldCheck className="h-3 w-3" /> Verified Offer
                  </span>
                )}
              </div>
              <DialogTitle className="text-xl leading-tight">
                {deal.title}
              </DialogTitle>
              <DialogDescription className="text-sm mt-1">
                Posted {deal.postedAt} in {deal.category}
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl font-bold tracking-tight">{formatPrice(deal.currentPrice)}</span>
              <span className="text-lg text-muted-foreground line-through mb-1">{formatPrice(deal.originalPrice)}</span>
            </div>

            {/* Price History Chart */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Price History</h4>
              <div className="h-32 w-full bg-secondary/20 rounded-md p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={deal.priceHistory}>
                    <XAxis dataKey="date" hide />
                    <YAxis domain={['dataMin', 'dataMax']} hide />
                    <Tooltip 
                      formatter={(value: any) => [formatPrice(Number(value)), "Price"]}
                      labelStyle={{ color: 'black' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#4f46e5" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: "#4f46e5", strokeWidth: 0 }} 
                      activeDot={{ r: 6 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {deal.notes && (
              <div className="bg-primary/5 rounded-md p-3 mb-6 border border-primary/10">
                <div className="flex gap-2">
                  <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{deal.notes}</p>
                </div>
              </div>
            )}

            <div className="mt-auto pt-4">
              <Button 
                size="lg" 
                className="w-full gap-2 text-base"
                onClick={() => window.open(deal.url, "_blank")}
              >
                View Deal on {deal.platform} <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
