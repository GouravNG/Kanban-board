"use client"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

import { useForm } from "react-hook-form"
import { useUpdateBoard } from "@/lib/hooks"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit, EditIcon, LoaderCircleIcon } from "lucide-react"
import { Input } from "../ui/input"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { colors } from "@/lib/colors"
import { TUpdateBoard, updateBoardSchema } from "@/lib/schema"

const UpdateBoardForm = ({
  defaultValues,
  id,
}: {
  defaultValues: TUpdateBoard
  id: string
}) => {
  const { mutate, isPending } = useUpdateBoard(id)

  const form = useForm<TUpdateBoard>({
    resolver: zodResolver(updateBoardSchema),
    defaultValues,
  })

  const onSubmit = (boardsPayload: TUpdateBoard) => {
    mutate(boardsPayload)
    form.reset()
  }

  return (
    <Dialog>
      {/* Dialog Trigger */}
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <Edit />
        </Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Board</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Board Name */}
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Board Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-xs"
                      placeholder="Enter the board name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Board Description */}
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      className="text-xs"
                      placeholder="Add description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Board Color */}
            <FormField
              name="color"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose Color</FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col"
                    >
                      <div className="grid grid-cols-9 gap-2">
                        {colors.map((clr, idx) => {
                          return (
                            <FormItem
                              className="flex items-center gap-3"
                              key={clr + idx}
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={clr}
                                  className={`h-8 w-8 ${clr} rounded-full data-[state=checked]:ring-2 data-[state=checked]:ring-primary`}
                                />
                              </FormControl>
                            </FormItem>
                          )
                        })}
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <DialogFooter className="flex flex-row justify-center gap-8">
              {/* Closing of dialog */}
              <DialogClose asChild>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>

              {/* Submit of form */}
              <Button type="submit" disabled={isPending}>
                {!isPending ? (
                  <>
                    <EditIcon />
                    Update
                  </>
                ) : (
                  <LoaderCircleIcon className="animate-spin" />
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default UpdateBoardForm
