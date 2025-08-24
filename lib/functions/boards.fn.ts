import queryClient from "../queryclient/axios.config"
import { boardsURL } from "../endpoints"
import { TBoardById, TCreateBoard, TGetBoard, TUpdateBoard } from "../types"

// POST
export const createBoard = async (requestBody: TCreateBoard) => {
  const res = await queryClient.post<TGetBoard[]>(
    boardsURL.url_createBoards(),
    requestBody
  )
  return res.data
}

// PATCH
export const updateBoard = async (requestBody: TUpdateBoard, id: string) => {
  const res = await queryClient.patch<TGetBoard[]>(
    boardsURL.url_updateBoardById(id),
    requestBody
  )
  return res.data
}

// GET
export const getBoards = async () => {
  const res = await queryClient.get<TGetBoard[]>(boardsURL.url_getAllBoards())
  return res.data
}

// GETBYID
export const getBoardById = async (id: string) => {
  const res = await queryClient.get<TBoardById[]>(
    boardsURL.url_getBoardById(id)
  )
  return res.data
}

//Delete Board
export const deleteBoard = async (id: string) => {
  const res = await queryClient.delete(boardsURL.url_deleteBoardByid(id))
  return res.data
}
