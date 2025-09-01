import { TGetTask, TUpdateTask, updateTaskSchema } from "@/lib/schema"
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
import { Calendar1, Edit, Loader2 } from "lucide-react"
import { DialogClose, DialogFooter } from "../ui/dialog"
import { Calendar } from "../ui/calendar"
import { TaskPriorities } from "@/lib/types"
import { getPriorityColors } from "@/lib/colors"
import { useDeleteTask, useEditTask } from "@/lib/hooks"
import DeleteDialogForm from "./Delete.form"

const UpdateTaskForm: React.FC<TGetTask> = ({
  description,
  due_date,
  priority,
  title,
  id,
}) => {
  const { mutate, isPending } = useEditTask(String(id))
  const { mutate: deleteTask, isPending: isTaskDeletePending } = useDeleteTask(
    String(id)
  )
  const form = useForm<TUpdateTask>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      description: description ?? " ",
      due_date: new Date(due_date),
      priority,
      title,
    },
  })

  const onSubmit = (data: TUpdateTask) => {
    mutate(data)
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
                          className={`w-4 h-4 inline-block mr-2 rounded-full ${getPriorityColors(
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
          {/* Delete */}
          <DeleteDialogForm
            deleteFn={deleteTask}
            isLoading={isTaskDeletePending}
          />

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
                <Edit className="mr-1" />
                Update
              </>
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
export default UpdateTaskForm
