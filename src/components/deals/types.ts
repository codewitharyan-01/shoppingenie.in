export interface Deal {
  id: string
  title: string
  platform: "Amazon" | "Flipkart" | "Myntra" | "Shopsy" | string
  originalPrice: number
  currentPrice: number
  discountPercentage: number
  category: string
  imageUrl: string
  postedAt: string
  isVerified: boolean
  urgencyLevel?: "high" | "medium" | "low"
  notes?: string
  priceHistory: { date: string; price: number }[]
  url: string
  reason?: string
  rank?: number
  dealStrength?: 1 | 2 | 3 | 4 | 5
}

