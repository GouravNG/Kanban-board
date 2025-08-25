import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query"

import {
  createBoard,
  deleteBoard,
  getBoardById,
  getBoards,
  updateBoard,
} from "../functions/boards.fn"

import { toast } from "sonner"
import { TUpdateBoard } from "../types"
import useDismissDialog from "./useDismissDialog"

// POST
export const useCreateBoard = () => {
  const qc = useQueryClient()
  const { dismiss } = useDismissDialog()
  return useMutation({
    mutationKey: ["board"],
    mutationFn: createBoard,
    onSuccess: () => toast.success("New Board Created Successfully"),
    onError: () => toast.error("Something went wrong!!"),
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["board"] })
      dismiss()
    },
  })
}

// GET
export const getBoardOption = (token: string = "") =>
  queryOptions({
    queryKey: ["board"],
    queryFn: () => getBoards(token),
  })

export const useBoardsCount = () => {
  return useQuery({
    ...getBoardOption(),
    select: (data) => data.length,
  })
}

// GET
export const useBoardsActivity = () => {
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  return useQuery({
    ...getBoardOption(),
    select: (data) =>
      data.filter((boards) => {
        const updateData = new Date(boards.updated_at)
        return updateData > oneWeekAgo
      }).length,
  })
}

// GET
export const useBoards = () => {
  return useSuspenseQuery({ ...getBoardOption() })
}

// PATCH
export const useUpdateBoard = (id: string) => {
  const { dismiss } = useDismissDialog()
  const qc = useQueryClient()
  return useMutation({
    mutationKey: ["board"],
    mutationFn: (payload: TUpdateBoard) => updateBoard(payload, id),
    onSuccess: () => toast.success("Board updated successfully"),
    onError: () => toast.error("Something went wrong while updating the board"),
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["board", id] })
      qc.invalidateQueries({ queryKey: ["board"] })
      dismiss()
    },
  })
}

// GET
const boardsByIdOptions = (id: string) =>
  queryOptions({
    queryKey: ["board", id],
    queryFn: () => getBoardById(id),
  })

// GET
export const useBoardById = (id: string) => {
  return useQuery({
    ...boardsByIdOptions(id),
    select: (data) => data[0],
  })
}

// GET
export const useGetAllColumnIds = (id: string) => {
  return useQuery({
    ...boardsByIdOptions(id),
    select: (d) => d.map((i) => i.columns.map(({ id }) => id))[0],
  })
}

//GET COL COUNT
export const useColumnSortNumber = (b_id: string) => {
  return useQuery({
    ...boardsByIdOptions(b_id),
    select: (d) => d[0].columns.length,
  })
}

export const useDeleteBoard = (id: string) => {
  const qc = useQueryClient()
  return useMutation({
    mutationKey: ["board"],
    mutationFn: () => deleteBoard(id),
    onSuccess: () => toast.success("Board Deleted successfully"),
    onError: () => toast.error("Something went wrong while Deleting the board"),
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["board", id] })
      qc.invalidateQueries({ queryKey: ["board"] })
    },
  })
}
