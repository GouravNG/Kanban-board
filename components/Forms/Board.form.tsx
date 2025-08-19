import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
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
import { useForm } from "react-hook-form"
import { useCreateBoard } from "@/lib/hooks"
import { zodResolver } from "@hookform/resolvers/zod"
import { TCreateBoard, createBoardSchema } from "@/lib/schema"
import { LoaderCircleIcon, PlusCircleIcon } from "lucide-react"
import { Input } from "../ui/input"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { colors } from "@/lib/colors"
import { DialogTrigger } from "@radix-ui/react-dialog"

const CreateBoardForm = ({ user_id }: { user_id: string }) => {
  const { mutate, isPending } = useCreateBoard()

  const form = useForm<TCreateBoard>({
    resolver: zodResolver(createBoardSchema),
    defaultValues: {
      color: "bg-amber-500",
      description: "",
      title: "",
      user_id: user_id ?? "",
    },
  })

  const onSubmit = (payload: TCreateBoard) => {
    mutate(payload)
    form.reset()
  }

  return (
    <Dialog>
      {/* Button to trigger the form */}
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <PlusCircleIcon />
          Create Board
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Board</DialogTitle>
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
              {/* Closing the form */}
              <DialogClose asChild>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>

              {/* Submitting the form */}
              <Button type="submit">
                {!isPending ? (
                  <>
                    <PlusCircleIcon />
                    Create
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
export default CreateBoardForm
