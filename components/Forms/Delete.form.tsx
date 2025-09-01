import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { Loader2, Trash2 } from "lucide-react"

type TDeleteDialogForm = {
  deleteFn: () => void
  isLoading: boolean
}

const DeleteDialogForm: React.FC<TDeleteDialogForm> = ({
  deleteFn,
  isLoading,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>
          <Trash2 />
          <p className="sm:hidden">Delete</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button
            variant={"destructive"}
            disabled={isLoading}
            onClick={deleteFn}
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Trash2 />
                Delete
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default DeleteDialogForm
