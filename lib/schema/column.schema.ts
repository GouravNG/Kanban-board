import z from "zod"

// Base zod schema
const ColumnBaseSchema = z.object({
  id: z.number(),
  board_id: z.number(),
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters")
    .max(12, "Maximum length allowed from title is 12 letters only."),
  sort_order: z.number(),
  user_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

// Create Column Schema
export const createColumnsSchema = ColumnBaseSchema.pick({
  title: true,
  sort_order: true,
  user_id: true,
  board_id: true,
})

// Update Column Schema
export const updateColumnsSchema = createColumnsSchema.pick({ title: true })

export type TGetColumn = z.infer<typeof ColumnBaseSchema>
export type TCreateColumn = z.infer<typeof createColumnsSchema>
export type TUpdateColumn = z.infer<typeof updateColumnsSchema>
export type TReorderColumn = Pick<TCreateColumn, "sort_order">
