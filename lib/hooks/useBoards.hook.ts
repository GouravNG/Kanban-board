import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import { createBoard, getBoards } from "../functions/boards.fn"
import { CreateBoardPayload } from "../types"
import { useToken } from "./utils.hooks"

export const useCreateBoard = () => {
  useToken()
  const qc = useQueryClient()
  return useMutation({
    mutationKey: ["board"],
    mutationFn: (body: CreateBoardPayload) => createBoard(body),
    onSettled: () => qc.invalidateQueries({ queryKey: ["board"] }),
  })
}

const getBoardOption = queryOptions({
  queryKey: ["board"],
  queryFn: () => getBoards(),
})

export const useBoardsCount = () => {
  useToken()
  return useQuery({
    ...getBoardOption,
    select: (data) => data.length,
  })
}
