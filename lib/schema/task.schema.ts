import z from "zod"

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters")
    .max(12, "Maximum length allowed from title is 12 letters only."),
  column_id: z.number(),
  description: z.string().optional(),
  assignee: z.string(),
  due_date: z.date("Please select due date"),
  priority: z.enum(["P1", "P2", "P3"], "Please select priority"),
})

export type CreateTaskSchema = z.infer<typeof createTaskSchema>
