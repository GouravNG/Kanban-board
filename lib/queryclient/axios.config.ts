import axios from "axios"
import { getHeaders } from "../functions/utils"

const queryClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  ...getHeaders(),
})

export default queryClient
