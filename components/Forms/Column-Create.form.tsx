import { createColumnsSchema } from "@/lib/schema"
import { TCreateColumn } from "@/lib/types"
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
import { DialogFooter } from "../ui/dialog"
import { Button } from "../ui/button"
import { Loader2Icon, PlusCircle } from "lucide-react"
import { useCreateColumns } from "@/lib/hooks"
import { useBoardId, useUserId } from "@/store/persist.store"

const CreateColumn = () => {
  const { isPending, mutate } = useCreateColumns()
  const { boardId } = useBoardId()
  const { userId } = useUserId()

  const form = useForm<TCreateColumn>({
    resolver: zodResolver(createColumnsSchema),
    defaultValues: {
      board_id: boardId,
      user_id: userId,
      sort_order: 0,
      title: "",
    },
  })

  const onSubmit = (data: TCreateColumn) => {
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
          {
            <Button type="submit">
              {isPending ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <>
                  <PlusCircle /> Create
                </>
              )}
            </Button>
          }
        </DialogFooter>
      </form>
    </Form>
  )
}

export default CreateColumn
