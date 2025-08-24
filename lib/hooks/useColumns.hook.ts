import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  createColumn,
  deleteColumnById,
  updateColumnById,
} from "../functions/columns.fn"

import { toast } from "sonner"
import { TCreateColumn, TUpdateColumn } from "../schema"
import useDismissDialog from "./useDismissDialog"

// POST
export const useCreateColumns = () => {
  const qc = useQueryClient()
  const { dismiss } = useDismissDialog()
  return useMutation({
    mutationKey: ["column"],
    mutationFn: (payload: TCreateColumn) => createColumn(payload),
    onSuccess: () => toast.success("New Column Created Successfully"),
    onError: () => toast.error("Something went wrong!!"),
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["board"], exact: false })
      dismiss()
    },
  })
}

export const useEditColumn = (id: number) => {
  const qc = useQueryClient()
  const { dismiss } = useDismissDialog()
  return useMutation({
    mutationKey: ["column"],
    mutationFn: (payload: TUpdateColumn) => updateColumnById(id, payload),
    onSuccess: () => {
      dismiss()
      toast.success("Column edited successfully")
    },
    onError: () => toast.error("Something went wrong!!"),
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["task"], exact: false })
    },
  })
}

export const useDeleteColumn = (id: number) => {
  const qc = useQueryClient()
  return useMutation({
    mutationKey: ["column"],
    mutationFn: () => deleteColumnById(id),
    onSuccess: () => toast.success("Column deleted successfully"),
    onError: () => toast.error("Something went wrong!!"),
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["board"], exact: false })
    },
  })
}
