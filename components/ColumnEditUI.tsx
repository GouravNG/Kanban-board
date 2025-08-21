import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Edit } from "lucide-react"
import ColumnEditForm from "./Forms/Column-Edit.form"

const ColumnEditUi = ({ title }: { title: string }) => {
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
          <ColumnEditForm title={title} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default ColumnEditUi
