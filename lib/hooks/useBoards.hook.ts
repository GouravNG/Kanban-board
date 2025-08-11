import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import { createBoard, getBoards } from "../functions/boards.fn"
import { CreateBoardPayload, TBoards } from "../types"
import { useToken } from "./utils.hooks"
import { toast } from "sonner"
import { createColumnPayload } from "../schema"
import { useCreateColumns } from "./useColumns.hook"

export const useCreateBoard = () => {
  useToken()
  const qc = useQueryClient()
  const { mutate } = useCreateColumns()
  return useMutation({
    mutationKey: ["board"],
    mutationFn: (body: CreateBoardPayload) => createBoard(body.boardDetails),
    onSuccess: (data: TBoards[], requestPayload) =>
      mutate(
        requestPayload.columnDetails ??
          createColumnPayload(data[0].id, data[0].user_id)
      ),
    onSettled: () => qc.invalidateQueries({ queryKey: ["board"] }),
    onError: () => toast("Something went wrong!!"),
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

export const useBoardsActivity = () => {
  useToken()
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  return useQuery({
    ...getBoardOption,
    select: (data) =>
      data.filter((boards) => {
        const updateData = new Date(boards.updated_at)
        return updateData > oneWeekAgo
      }).length,
  })
}

export const useBords = () => {
  useToken()
  return useQuery({ ...getBoardOption })
}
