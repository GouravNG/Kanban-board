import z from "zod"

// Base zod schema

const TaskBaseSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(3, "Minimum length of title should be 3 letters")
    .max(25, "Maximum length allowed from title is 25 letters only."),
  assignee: z.string(),
  due_date: z.date("Please select due date"),
  priority: z.enum(["P1", "P2", "P3"], "Please select priority"),
  column_id: z.number(),
  sort_order: z.number(),
  description: z.string().optional(),
})

// Create Task Schema
export const createTaskSchema = TaskBaseSchema.pick({
  title: true,
  description: true,
  priority: true,
  due_date: true,
  column_id: true,
  assignee: true,
  sort_order: true,
})

// Update task Schema
export const updateTaskSchema = createTaskSchema.partial().pick({
  title: true,
  description: true,
  due_date: true,
  priority: true,
})

export type TGetTask = z.infer<typeof TaskBaseSchema>
export type TCreateTask = z.infer<typeof createTaskSchema>
export type TUpdateTask = z.infer<typeof updateTaskSchema>
export type TReorderTask = Partial<Pick<TGetTask, "sort_order" | "column_id">>
