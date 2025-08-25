"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useShallow } from "zustand/shallow"

type PersistStoreTypes = {
  viewMode: "grid" | "list"
  toggleViewMode: () => void
  boardId: number
  setBoardId: (id: number) => void
  userId: string
  setUserId: (id: string) => void
  userName: string
  setUserName: (userName: string) => void
}

export const usePersistStore = create<PersistStoreTypes>()(
  persist(
    (set) => ({
      viewMode: "list",
      toggleViewMode: () =>
        set((s) => ({ viewMode: s.viewMode === "list" ? "grid" : "list" })),
      boardId: 0,
      setBoardId: (id) => set({ boardId: id }),
      userId: "",
      setUserId: (id) => set({ userId: id }),
      userName: "",
      setUserName: (userName) => set({ userName }),
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

export const useBoardId = () =>
  usePersistStore(
    useShallow(({ boardId, setBoardId }) => ({
      boardId,
      setBoardId,
    }))
  )

export const useUserId = () =>
  usePersistStore(
    useShallow(({ userId, setUserId }) => ({
      userId,
      setUserId,
    }))
  )

export const useUserName = () =>
  usePersistStore(
    useShallow(({ userName, setUserName }) => ({
      userName,
      setUserName,
    }))
  )
