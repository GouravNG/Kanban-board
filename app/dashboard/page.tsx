import BoardsView from "@/components/BoardsView"
import DashBoardUtils from "@/components/DashBoardUtils"
import DashBoardWidgets from "@/components/DashBoardWidgets"
import SkeletonBoards from "@/components/skeletons/Boards.skeletons"
import { getBoardOption } from "@/lib/hooks"
import { getQueryClient } from "@/lib/queryclient/get-query-client"
import getToken from "@/lib/server-fn/getToken"
import { getUser } from "@/lib/server-fn/getUser"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Suspense } from "react"

const Dashboard = async () => {
  const user = await getUser()
  const qc = getQueryClient()
  const token = await getToken()
  void qc.prefetchQuery(getBoardOption(token))

  if (user !== null)
    return (
      <main className="container mx-auto p-4 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Hi,{user.userName}
          </h1>
          <p className="text-gray-600 text-sm">
            Here&apos;s what happening with your boards
          </p>
        </div>

        <HydrationBoundary state={dehydrate(qc)}>
          <DashBoardWidgets />
          <div className="mb-6 sm:mb-8">
            <DashBoardUtils />
            <Suspense fallback={<SkeletonBoards />}>
              <BoardsView />
            </Suspense>
          </div>
        </HydrationBoundary>
      </main>
    )
}

export default Dashboard
