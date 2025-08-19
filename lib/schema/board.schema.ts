import z from "zod/v4"
import { colors } from "../colors"

// Base zod Schema
const BoardBaseSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters.")
    .max(20, "Maximum length allowed from title is 20 letters only."),
  user_id: z.string(),
  description: z.string().optional(),
  color: z.enum([...colors], "Please Choose the colors from below list."),
  created_at: z.string(),
  updated_at: z.string(),
})

// Create Board schema
export const createBoardSchema = BoardBaseSchema.pick({
  title: true,
  user_id: true,
  description: true,
  color: true,
})

// Update Board Schema
export const updateBoardSchema = createBoardSchema
  .partial({
    title: true,
    color: true,
  })
  .omit({ user_id: true })

export type TGetBoard = z.infer<typeof BoardBaseSchema>
export type TCreateBoard = z.infer<typeof createBoardSchema>
export type TUpdateBoard = z.infer<typeof updateBoardSchema>
