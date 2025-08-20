import { PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import CreateTaskForm from "./Forms/CreateTask.form"

const CreateTask = ({ c_id }: { c_id: number }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon /> Add Task
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        <CreateTaskForm c_id={c_id} />
      </DialogContent>
    </Dialog>
  )
}
export default CreateTask
