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

const CreateColumns = () => {
  return (
    <div className="flex">
      <div className="mx-auto p-2 flex flex-col items-center justify-center gap-2 ">
        <p className="text-sm text-gray-600">Start by creating the columns.</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} className="cursor-pointer">
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
      </div>
    </div>
  )
}
export default CreateColumns
