import { TUpdateColumn, updateColumnsSchema } from "@/lib/schema"
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
import { DialogClose, DialogFooter } from "../ui/dialog"
import { Button } from "../ui/button"
import { EditIcon, Loader2Icon } from "lucide-react"
import { useDeleteColumn, useEditColumn } from "@/lib/hooks"
import DeleteDialogForm from "./Delete.form"

const ColumnEditForm = ({ title, c_id }: { title: string; c_id: number }) => {
  const { mutate, isPending } = useEditColumn(c_id)
  const { mutate: deleteColumn, isPending: isColumnDeletePending } =
    useDeleteColumn(c_id)
  const form = useForm<TUpdateColumn>({
    resolver: zodResolver(updateColumnsSchema),
    defaultValues: {
      title,
    },
  })

  const onSubmit = (data: TUpdateColumn) => {
    mutate(data)
    form.reset()
  }

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Column name</FormLabel>
              <FormControl>
                <Input
                  placeholder="ex:Pending"
                  {...field}
                  className="text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          {/* Delete */}
          <DeleteDialogForm
            deleteFn={deleteColumn}
            isLoading={isColumnDeletePending}
          />
          <DialogClose asChild>
            <Button variant={"outline"}>Close</Button>
          </DialogClose>
          <Button type="submit">
            {isPending ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <>
                <EditIcon /> Update
              </>
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

export default ColumnEditForm
