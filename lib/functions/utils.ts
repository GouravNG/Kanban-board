import { usePersistStore } from "@/store/persist.store"

export const getHeaders = () => {
  const authKey = usePersistStore.getState().ua_key
  return {
    headers: {
      "Content-Type": "application/json",
      apikey: authKey,
      publickey: process.env.NEXT_PUBLIC_SUPABASE_ANAON_KEY!,
    },
  }
}
