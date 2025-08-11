import z from "zod"

export const createBoardSchema = z.object({
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters")
    .max(12, "Maximum length allowed from title is 12 letters only."),
  user_id: z.string(),
  description: z.string().optional(),
  color: z.string(),
})

export type CreateBoardSchema = z.infer<typeof createBoardSchema>
