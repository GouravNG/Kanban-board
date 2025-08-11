import { CreateBoardSchema, TBoards } from "../types"
import queryClient from "../queryclient/axios.config"

const API_BOARD = new URL(
  "/rest/v1/boards",
  process.env.NEXT_PUBLIC_SUPABASE_URL
)

export const createBoard = async (requestBody: CreateBoardSchema) => {
  API_BOARD.searchParams.set("select", "*")
  const res = await queryClient.post<TBoards[]>(
    API_BOARD.toString(),
    requestBody
  )
  return res.data
}

export const getBoards = async () => {
  const res = await queryClient.get<TBoards[]>(API_BOARD.toString())
  return res.data
}
