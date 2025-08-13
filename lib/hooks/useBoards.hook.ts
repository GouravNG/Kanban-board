import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import { createBoard, getBoards } from "../functions/boards.fn"
import { CreateBoardPayload, TBoards } from "../types"
import { toast } from "sonner"
import { createColumnPayload } from "../schema"
import { useCreateColumns } from "./useColumns.hook"
import { useCreateBoardForm } from "@/store/common.store"

export const useCreateBoard = () => {
  const qc = useQueryClient()
  const { toggleIsCreatingBoard } = useCreateBoardForm()
  const { mutate } = useCreateColumns()
  return useMutation({
    mutationKey: ["board"],
    mutationFn: (body: CreateBoardPayload) => createBoard(body.boardDetails),
    onSuccess: (data: TBoards[], requestPayload) =>
      mutate(
        requestPayload.columnDetails ??
          createColumnPayload(data[0].id, data[0].user_id)
      ),
    onSettled: () => {
      toggleIsCreatingBoard()
      qc.invalidateQueries({ queryKey: ["board"] })
    },
    onError: () => toast.error("Something went wrong!!"),
  })
}

const getBoardOption = queryOptions({
  queryKey: ["board"],
  queryFn: () => getBoards(),
})

export const useBoardsCount = () => {
  return useQuery({
    ...getBoardOption,
    select: (data) => data.length,
  })
}

export const useBoardsActivity = () => {
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

export const useBoards = () => {
  return useQuery({ ...getBoardOption })
}
