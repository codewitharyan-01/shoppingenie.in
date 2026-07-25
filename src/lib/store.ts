import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  savedDeals: string[]
  toggleSavedDeal: (dealId: string) => void
  isSaved: (dealId: string) => boolean
  
  // Example of future state we might want
  alertSubscriptions: string[]
  toggleAlertSubscription: (category: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      savedDeals: [],
      toggleSavedDeal: (dealId) => set((state) => ({
        savedDeals: state.savedDeals.includes(dealId)
          ? state.savedDeals.filter(id => id !== dealId)
          : [...state.savedDeals, dealId]
      })),
      isSaved: (dealId) => get().savedDeals.includes(dealId),

      alertSubscriptions: [],
      toggleAlertSubscription: (category) => set((state) => ({
        alertSubscriptions: state.alertSubscriptions.includes(category)
          ? state.alertSubscriptions.filter(c => c !== category)
          : [...state.alertSubscriptions, category]
      })),
    }),
    {
      name: 'shoppingenie-storage',
    }
  )
)
