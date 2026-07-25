import useSWR from "swr"
import { Deal } from "@/components/deals/types"
import { MOCK_DEALS } from "@/app/deals/data"

export type SortOption = "featured" | "discount_desc" | "price_asc" | "newest"

export interface FilterState {
  search: string
  platform: string[]
  category: string[]
  verifiedOnly: boolean
}

// In a real app, this would be a fetch call to your API route
// e.g. const fetcher = (url: string) => fetch(url).then(res => res.json())
const fetcher = async ([url, filters, sort]: [string, FilterState, SortOption]) => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 600))

  let results = [...MOCK_DEALS]

  // Search
  if (filters.search) {
    const q = filters.search.toLowerCase()
    results = results.filter(
      (deal) => 
        deal.title.toLowerCase().includes(q) || 
        deal.category.toLowerCase().includes(q)
    )
  }

  // Platform filter
  if (filters.platform.length > 0) {
    results = results.filter((deal) => filters.platform.includes(deal.platform))
  }

  // Category filter
  if (filters.category.length > 0) {
    results = results.filter((deal) => filters.category.includes(deal.category))
  }

  // Verified Only
  if (filters.verifiedOnly) {
    results = results.filter((deal) => deal.isVerified)
  }

  // Sort
  switch (sort) {
    case "discount_desc":
      results.sort((a, b) => b.discountPercentage - a.discountPercentage)
      break
    case "price_asc":
      results.sort((a, b) => a.currentPrice - b.currentPrice)
      break
    case "newest":
      results.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime())
      break
    case "featured":
    default:
      // Featured logic: verified + high discount + urgency
      results.sort((a, b) => {
        const scoreA =
          (a.isVerified ? 10 : 0) + a.discountPercentage + (a.urgencyLevel === "high" ? 5 : 0)
        const scoreB =
          (b.isVerified ? 10 : 0) + b.discountPercentage + (b.urgencyLevel === "high" ? 5 : 0)
        return scoreB - scoreA
      })
      break
  }

  return results
}

export function useDeals(filters: FilterState, sort: SortOption) {
  // Use SWR to handle data fetching, caching, and revalidation
  const { data, error, isLoading } = useSWR(
    ["/api/deals", filters, sort],
    fetcher,
    {
      keepPreviousData: true, // Prevents flashing empty state when filters change
      revalidateOnFocus: false,
    }
  )

  return {
    deals: data,
    isLoading,
    isError: error
  }
}
