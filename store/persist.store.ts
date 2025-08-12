"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useShallow } from "zustand/shallow"

type PersistStoreTypes = {
  viewMode: "grid" | "list"
  toggleViewMode: () => void
}

export const usePersistStore = create<PersistStoreTypes>()(
  persist(
    (set) => ({
      viewMode: "list",
      toggleViewMode: () =>
        set((s) => ({ viewMode: s.viewMode === "list" ? "grid" : "list" })),
    }),
    {
      name: "zp-store",
    }
  )
)

export const useViewToggles = () =>
  usePersistStore(
    useShallow(({ viewMode, toggleViewMode }) => ({ viewMode, toggleViewMode }))
  )
