import { useMutation } from "@tanstack/react-query"
import { createColumn } from "../functions/columns.fn"

import { toast } from "sonner"
import { TCreateColumn } from "../schema"

// POST
export const useCreateColumns = () => {
  return useMutation({
    mutationKey: ["column"],
    mutationFn: (payload: TCreateColumn) => createColumn(payload),
    onSuccess: () => toast.success("New Board Created Successfully"),
    onError: () => toast.error("Something went wrong!!"),
  })
}
