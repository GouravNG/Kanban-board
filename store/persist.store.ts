import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useShallow } from "zustand/shallow"

type PersistStoreTypes = {
  apiKey: string | null
  setApiKey: (key: string | null) => void
}

export const usePersistStore = create<PersistStoreTypes>()(
  persist(
    (set) => ({
      apiKey: null,
      setApiKey: (key) => set({ apiKey: key }),
    }),
    {
      name: "zp-store",
    }
  )
)

export const useApikey = () =>
  usePersistStore(
    useShallow(({ apiKey, setApiKey }) => ({ apiKey, setApiKey }))
  )
