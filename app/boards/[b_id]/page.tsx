"use client"

import CreateTaskForm from "@/components/Forms/CreateTask.form"
import UpdateBoardForm from "@/components/Forms/UpdateBoard.form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useBoardById } from "@/lib/hooks"
import { useEdit } from "@/store/common.store"
import { ArrowLeft, Edit, Filter, PlusIcon, Trash2 } from "lucide-react"
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
        <main className="border border-black container mx-auto px-2 sm:px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Total Task: {1}</span>
              </div>
            </div>

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

                <CreateTaskForm c_id={1} user_id="" />
              </DialogContent>
            </Dialog>
          </div>
        </main>

        {/* Dialogs */}
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
