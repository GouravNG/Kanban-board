"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useShallow } from "zustand/shallow"

type PersistStoreTypes = {
  authKey: string | null
  setAuthKey: (key: string | null) => void
}

export const usePersistStore = create<PersistStoreTypes>()(
  persist(
    (set) => ({
      authKey: null,
      setAuthKey: (key) => set({ authKey: key }),
    }),
    {
      name: "zp-store",
    }
  )
)

export const useAuthKey = () =>
  usePersistStore(
    useShallow(({ authKey, setAuthKey }) => ({ authKey, setAuthKey }))
  )
