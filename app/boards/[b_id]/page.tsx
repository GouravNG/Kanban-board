"use client"

import UpdateBoardForm from "@/components/Forms/UpdateBoard.form"
import { Button } from "@/components/ui/button"
import { useBoardById } from "@/lib/hooks"
import { useEdit } from "@/store/common.store"
import { ArrowLeft, Edit, Filter, Trash2 } from "lucide-react"
import Link from "next/link"
import { use } from "react"

const BoardPage = ({ params }: { params: Promise<{ b_id: string }> }) => {
  const { b_id } = use(params)
  const { data, isLoading, error } = useBoardById(b_id)
  const { toggleIsEditing } = useEdit()
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Something went wrong!!</h1>
  if (data && data !== undefined)
    return (
      <div className="min-h-screen">
        {/* Names */}
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
            <Button size={"sm"} onClick={() => toggleIsEditing()}>
              <Edit />
            </Button>
            <Button size={"sm"} variant={"destructive"}>
              <Trash2 />
            </Button>
          </div>
        </div>
        {/* layout */}
        <UpdateBoardForm
          id={b_id}
          defaultValues={{
            user_id: data.user_id,
            color: data.color,
            description: data.description,
            title: data.title,
          }}
        />
      </div>
    )
}
export default BoardPage
