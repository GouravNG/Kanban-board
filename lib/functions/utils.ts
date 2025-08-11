import { usePersistStore } from "@/store/persist.store"

export const getHeaders = () => {
  const token = usePersistStore.getState().authKey ?? ""
  return {
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANAON_KEY!,
      Authorization: `Bearer ${token}`,
      Prefer: " return=representation",
    },
  }
}
