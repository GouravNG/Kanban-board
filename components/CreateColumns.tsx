import { CirclePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import CreateColumn from "./Forms/Column-Create.form"

const DialogCreateColumn = ({
  variant = "type1",
}: {
  variant: "type1" | "type2"
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant === "type1" ? "outline" : "ghost"}
          className="cursor-pointer"
        >
          <CirclePlusIcon /> Create Column
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>
          <DialogHeader>Add new column</DialogHeader>
        </DialogTitle>

        <CreateColumn />
      </DialogContent>
    </Dialog>
  )
}

const CreateColumns = ({
  variant = "type1",
}: {
  variant: "type1" | "type2"
}) => {
  return variant === "type1" ? (
    <div className="flex">
      <div className="mx-auto p-2 flex flex-col items-center justify-center gap-2 ">
        <p className="text-sm text-gray-600">Start by creating the columns.</p>
        <DialogCreateColumn variant={variant} />
      </div>
    </div>
  ) : (
    <DialogCreateColumn variant={variant} />
  )
}
export default CreateColumns
