import z from "zod"
import { colors } from "../colors"

export const createBoardSchema = z.object({
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters")
    .max(20, "Maximum length allowed from title is 20 letters only."),
  user_id: z.string(),
  description: z.string().optional(),
  color: z.enum([...colors], "Please Choose the colors from below list."),
})

export const updateBoardSchema = z.object({
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters")
    .max(20, "Maximum length allowed from title is 20 letters only.")
    .optional(),
  user_id: z.string(),
  description: z.string().optional(),
  color: z
    .enum([...colors], "Please Choose the colors from below list.")
    .optional(),
})

export type CreateBoardSchema = z.infer<typeof createBoardSchema>
export type UpdateBoardSchema = z.infer<typeof updateBoardSchema>
