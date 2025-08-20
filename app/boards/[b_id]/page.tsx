"use client"

import BoardPageUtils from "@/components/BoardPageUtils"
import CreateColumns from "@/components/CreateColumns"
import CreateTask from "@/components/CreateTask"
import Draggable from "@/components/Draggable"
import { useBoardById } from "@/lib/hooks"
import { useBoardId } from "@/store/persist.store"
import { use } from "react"

const BoardPage = ({ params }: { params: Promise<{ b_id: string }> }) => {
  const { b_id } = use(params)
  const { setBoardId } = useBoardId()
  const { data, isLoading, error } = useBoardById(b_id)
  setBoardId(Number(b_id))

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>Something went wrong!!</h1>

  if (data && data !== undefined) {
    return (
      <div className="min-h-screen">
        {/* Utilities */}
        <BoardPageUtils b_id={b_id} data={data} />

        {/* layout */}
        <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
          {data.columns.length ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">
                    Total Task: {data.columns.length}
                  </span>
                </div>
              </div>

              <CreateTask c_id={data.columns[0].id} />

              {/* task columsn */}
              <div className="flex flex-col lg:flex-row lg:space-x-6 lg:overflow-x-auto lg:pb-6 lg:px-2 lg:mx-2 space-y-4 lg:space-y-0">
                <Draggable />
              </div>
            </div>
          ) : (
            <CreateColumns />
          )}
        </main>
      </div>
    )
  }
}
export default BoardPage
1
