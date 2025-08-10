import { usePersistStore } from "@/store/persist.store"

export const getHeaders = () => {
  const apikey = usePersistStore.getState().apiKey ?? ""
  return {
    headers: {
      "Content-Type": "application/json",
      apikey,
    },
  }
}
