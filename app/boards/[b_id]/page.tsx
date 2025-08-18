"use client"

import Column from "@/components/Columns"
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
import {
  taskOptions,
  useBoardById,
  useCreateColumns,
  useGetAllColumnIds,
  useTasksByColumnId,
} from "@/lib/hooks"
import { useEdit } from "@/store/common.store"
// import { useQueries } from "@tanstack/react-query"
import { ArrowLeft, Edit, Filter, PlusIcon, Trash2 } from "lucide-react"
import Link from "next/link"
import { use } from "react"

const BoardPage = ({ params }: { params: Promise<{ b_id: string }> }) => {
  const { b_id } = use(params)
  const { data, isLoading, error } = useBoardById(b_id)
  const { data: cls } = useGetAllColumnIds(b_id)
  // console.log(cls)
  const res = useTasksByColumnId(cls ?? [])

  const { toggleIsEditing } = useEdit()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Something went wrong!!</h1>
  if (data && data !== undefined) {
    const c_id = data.columns[0].id
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

                <CreateTaskForm
                  c_id={c_id}
                  user_id={data.user_id}
                  b_id={Number(b_id)}
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* task columsn */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 lg:overflow-x-auto lg:pb-6 lg:px-2 lg:mx-2 space-y-4 lg:space-y-0">
            {<Column data={res} />}
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
}
export default BoardPage
1
