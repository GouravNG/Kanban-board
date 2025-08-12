export const getHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANAON_KEY!,
      Prefer: " return=representation",
    },
  }
}
