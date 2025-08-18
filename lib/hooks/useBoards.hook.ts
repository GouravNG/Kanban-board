import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query"
import {
  createBoard,
  getBoardById,
  getBoards,
  updateBoard,
} from "../functions/boards.fn"
import { CreateBoardPayload, TBoards } from "../types"
import { toast } from "sonner"
import { createColumnPayload, UpdateBoardSchema } from "../schema"
import { useCreateColumns } from "./useColumns.hook"
import { useCreateBoardForm, useEdit } from "@/store/common.store"

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

export const useUpdateBoard = (id: string) => {
  const qc = useQueryClient()
  const { toggleIsEditing } = useEdit()
  return useMutation({
    mutationKey: ["board"],
    mutationFn: (payload: UpdateBoardSchema) => updateBoard(payload, id),
    onSuccess: () => {
      toggleIsEditing()
      toast.success("Board updated successfully")
    },
    onError: () => toast.error("Something went wrong while updating the board"),
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["board", id] })
      qc.invalidateQueries({ queryKey: ["board"] })
    },
  })
}

const boardsByIdOptions = (id: string) =>
  queryOptions({
    queryKey: ["board", id],
    queryFn: () => getBoardById(id),
    select: (data) => data[0],
  })

export const useBoardById = (id: string) => {
  return useQuery({
    ...boardsByIdOptions(id),
  })
}

export const useGetAllColumnIds = (id: string) => {
  return useQuery({
    ...boardsByIdOptions(id),
    select: (d) => d.map((i) => i.columns.map(({ id }) => id))[0],
  })
}
