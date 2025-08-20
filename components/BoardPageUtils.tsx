import { TBoardById } from "@/lib/types"
import { ArrowLeft, Filter, Trash2 } from "lucide-react"
import UpdateBoardForm from "./Forms/UpdateBoard.form"
import { Button } from "./ui/button"
import Link from "next/link"

const BoardPageUtils = ({ data, b_id }: { data: TBoardById; b_id: string }) => {
  return (
    <div className="flex items-center justify-between p-2 ">
      <div className="flex items-center">
        <span className="bg-gray-200 p-1 rounded-full hover:bg-gray-400 transition-colors">
          <Link href={"/dashboard"}>
            <ArrowLeft className="text-gray-600 hover:text-gray-200  transition-colors" />
          </Link>
        </span>
        <h2 className="pl-2 ">{data.title}</h2>
        <div className={`${data.color} w-4 h-4 rounded-full ml-4`} />
      </div>

      {/* buttons */}
      <div className="space-x-2">
        <Button size={"sm"} variant={"outline"}>
          <Filter />
        </Button>

        {/* Edit the board */}
        <UpdateBoardForm
          id={b_id}
          defaultValues={{
            color: data.color,
            description: data.description,
            title: data.title,
          }}
        />

        <Button size={"sm"} variant={"destructive"}>
          <Trash2 />
        </Button>
      </div>
    </div>
  )
}
export default BoardPageUtils
