import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createColumn } from "../functions/columns.fn"

import { toast } from "sonner"
import { TCreateColumn } from "../schema"
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
