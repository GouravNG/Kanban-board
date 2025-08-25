import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import UpdateBoardForm from "./Forms/UpdateBoard.form"
import { Button } from "./ui/button"
import { useBoardId } from "@/store/persist.store"
import { TBoardById } from "@/lib/types"
import { ArrowLeft, Filter, InfoIcon, Trash2 } from "lucide-react"

const BoardPageUtils = ({ data }: { data: TBoardById }) => {
  const { boardId } = useBoardId()
  return (
    <div className="flex items-center justify-between p-2 ">
      <div className="flex items-center">
        <span className="bg-gray-200 p-1 rounded-full hover:bg-gray-400 transition-colors">
          <Link href={"/dashboard"}>
            <ArrowLeft className="text-gray-600 hover:text-gray-200  transition-colors" />
          </Link>
        </span>

        <div className="flex space-x-2 items-center justify-between ml-6">
          <h2>{data.title}</h2>
          {data.description && (
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="w-5 h-5 text-blue-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{data.description}</p>
              </TooltipContent>
            </Tooltip>
          )}
          <div className={`${data.color} w-4 h-4 rounded-full`} />
        </div>
      </div>

      {/* buttons */}
      <div className="space-x-2">
        <Button size={"sm"} variant={"outline"} disabled={true}>
          <Filter />
        </Button>

        {/* Edit the board */}
        <UpdateBoardForm
          id={String(boardId)}
          defaultValues={{
            color: data.color,
            description: data.description,
            title: data.title,
          }}
        />

        <Button size={"sm"} variant={"destructive"} disabled={true}>
          <Trash2 />
        </Button>
      </div>
    </div>
  )
}
export default BoardPageUtils
