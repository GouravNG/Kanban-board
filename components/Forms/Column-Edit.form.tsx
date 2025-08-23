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
import { EditIcon, Loader2Icon, TrashIcon } from "lucide-react"

const ColumnEditForm = ({ title }: { title: string }) => {
  const form = useForm<TUpdateColumn>({
    resolver: zodResolver(updateColumnsSchema),
    defaultValues: {
      title,
    },
  })

  const onSubmit = (data: TUpdateColumn) => {
    console.log(data)
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
          <Button variant={"destructive"}>
            <TrashIcon />
            <p className="sm:hidden">Delete</p>
          </Button>
          <DialogClose asChild>
            <Button variant={"outline"}>Close</Button>
          </DialogClose>
          <Button type="submit">
            {false ? (
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
