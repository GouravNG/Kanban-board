import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Edit } from "lucide-react"
import UpdateTaskForm from "./Forms/Task-Update"
import { TGetTask } from "@/lib/schema"

const TaskEdit = ({ data }: { data: TGetTask }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"sm"} className="flex-shrink-0">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit your task</DialogTitle>
          <UpdateTaskForm {...data} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default TaskEdit
