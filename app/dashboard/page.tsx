"use client"

import { useBoardsCount } from "@/lib/hooks"
import { useUser } from "@clerk/nextjs"

const Dashboard = () => {
  const { user } = useUser()
  const { data, error, isLoading } = useBoardsCount()
  return (
    <main className="container mx-auto p-4 sm:py-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Hi,
          {user?.username || user?.emailAddresses[0].emailAddress.split("@")[0]}
        </h1>
        <p className="text-gray-600">
          Here&apos;s what happening with your boards
        </p>
      </div>

      {/* temp */}
      <div>
        {isLoading ? (
          <span>Loading..</span>
        ) : (
          <span>Boards count is:{JSON.stringify(data)}</span>
        )}
        {error && <span>{error.message}</span>}
      </div>
    </main>
  )
}
export default Dashboard
