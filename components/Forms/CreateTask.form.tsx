"use client"
import { createTaskSchema, CreateTaskSchema } from "@/lib/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { Calendar1, Loader2, PlusCircle } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { DialogClose, DialogFooter } from "../ui/dialog"
import { TaskPriorities } from "@/lib/types"
import { useCreateTask } from "@/lib/hooks"

type TCreateTaskForm = {
  user_id: string
  c_id: number
  b_id: number
}

const CreateTaskForm: React.FC<TCreateTaskForm> = ({ user_id, c_id, b_id }) => {
  const { mutate, isPending } = useCreateTask(b_id)

  const form = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      assignee: user_id,
      column_id: c_id,
      title: "",
    },
  })

  const onSubmit = (data: CreateTaskSchema) => {
    mutate(data)
  }

  const priorityClrs = (clr: TaskPriorities) => {
    switch (clr) {
      case "P1":
        return "bg-red-500"
      case "P2":
        return "bg-yellow-500"
      case "P3":
        return "bg-green-500"
      default:
        return "bg-green-500"
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Title */}
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the task name"
                  {...field}
                  className="text-xs"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add description about the task"
                  {...field}
                  className="resize-none text-xs"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-around">
          {/* Priority */}
          <FormField
            name="priority"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Priority</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {(["P3", "P2", "P1"] as TaskPriorities[]).map((p) => (
                      <SelectItem key={p} value={p}>
                        <div
                          className={`w-4 h-4 inline-block mr-2 rounded-full ${priorityClrs(
                            p
                          )}`}
                        />
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Due Date */}
          <FormField
            name="due_date"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Due Date</FormLabel>
                <Popover modal={true}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className="justify-between font-normal text-gray-600 w-full"
                        type="button"
                      >
                        {field.value ? (
                          field.value.toLocaleDateString()
                        ) : (
                          <>
                            Select Date
                            <Calendar1 className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-[5000]" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        {/* Buttons */}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <PlusCircle className="mr-1" />
                Create
              </>
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

export default CreateTaskForm
