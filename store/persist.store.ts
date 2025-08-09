import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useShallow } from "zustand/shallow"

type PersistStoreTypes = {
  ua_key: string
  setUA_key: (key: string) => void
}

export const usePersistStore = create<PersistStoreTypes>()(
  persist(
    (set) => ({
      ua_key: "",
      setUA_key: (key) => set({ ua_key: key }),
    }),
    {
      name: "persist-store",
    }
  )
)

export const useKey = () =>
  usePersistStore(
    useShallow(({ setUA_key, ua_key }) => ({ setUA_key, ua_key }))
  )
