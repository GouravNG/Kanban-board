import z from "zod"

export const createColumnsSchema = z.object({
  board_id: z.number(),
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters")
    .max(12, "Maximum length allowed from title is 12 letters only."),
  sort_order: z.number(),
  user_id: z.string(),
})

export const createColumnPayload = (
  board_id: number,
  user_id: string
): CreateColumnSchema[] => [
  {
    board_id,
    title: "Pending",
    sort_order: 0,
    user_id,
  },
  {
    board_id,
    title: "Inprogress",
    sort_order: 1,
    user_id,
  },
  {
    board_id,
    title: "Completed",
    sort_order: 2,
    user_id,
  },
]

export type CreateColumnSchema = z.infer<typeof createColumnsSchema>
