import {
  CreateBoardSchema,
  TBoardById,
  TBoards,
  UpdateBoardSchema,
} from "../types"
import queryClient from "../queryclient/axios.config"
import { boardsURL } from "../endpoints"

export const createBoard = async (requestBody: CreateBoardSchema) => {
  const res = await queryClient.post<TBoards[]>(
    boardsURL.url_createBoards(),
    requestBody
  )
  return res.data
}

export const getBoards = async () => {
  const res = await queryClient.get<TBoards[]>(boardsURL.url_getAllBoards())
  return res.data
}

export const updateBoard = async (
  requestBody: UpdateBoardSchema,
  id: string
) => {
  const res = await queryClient.patch<TBoards[]>(
    boardsURL.url_updateBoardById(id),
    requestBody
  )
  return res.data
}

export const getBoardById = async (id: string) => {
  const res = await queryClient.get<TBoardById[]>(
    boardsURL.url_getBoardById(id)
  )
  return res.data
}
