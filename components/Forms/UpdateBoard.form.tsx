"use client"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { useEdit } from "@/store/common.store"
import { useForm } from "react-hook-form"
import { useUpdateBoard } from "@/lib/hooks"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircleIcon, PlusCircleIcon } from "lucide-react"
import { Input } from "../ui/input"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { colors } from "@/lib/colors"
import { UpdateBoardSchema } from "@/lib/types"
import { updateBoardSchema } from "@/lib/schema"

const UpdateBoardForm = ({
  defaultValues,
  id,
}: {
  defaultValues: UpdateBoardSchema
  id: string
}) => {
  const { isEditing, toggleIsEditing } = useEdit()
  const { mutate, isPending } = useUpdateBoard(id)

  const form = useForm<UpdateBoardSchema>({
    resolver: zodResolver(updateBoardSchema),
    defaultValues,
  })

  const onSubmit = (boardsPayload: UpdateBoardSchema) => {
    mutate(boardsPayload)
    form.reset()
  }

  const handleClose = () => {
    toggleIsEditing()
    form.reset()
  }

  return (
    <Dialog
      open={isEditing}
      onOpenChange={(open) => {
        if (!open) form.reset()
        toggleIsEditing()
      }}
    >
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
              <Button variant={"outline"} onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit">
                {!isPending ? (
                  <>
                    <PlusCircleIcon />
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
