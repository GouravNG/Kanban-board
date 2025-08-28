export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-white to-purple-100 flex flex-col items-center py-10 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg mb-2">
          Knbn Board
        </h1>
        <p className="text-lg text-gray-600">
          Organize your tasks visually and boost your productivity
        </p>
      </div>
      <main className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        {/* Example Kanban Columns */}
        <section className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
            To Do
          </h2>
          <div className="flex flex-col gap-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded p-4 shadow-sm">
              <h3 className="font-semibold text-blue-800">Design login page</h3>
              <p className="text-sm text-gray-500">UI/UX for authentication</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded p-4 shadow-sm">
              <h3 className="font-semibold text-blue-800">Setup database</h3>
              <p className="text-sm text-gray-500">MongoDB schema design</p>
            </div>
          </div>
        </section>
        <section className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            In Progress
          </h2>
          <div className="flex flex-col gap-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded p-4 shadow-sm">
              <h3 className="font-semibold text-yellow-800">API integration</h3>
              <p className="text-sm text-gray-500">
                Connect frontend to backend
              </p>
            </div>
          </div>
        </section>
        <section className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            Done
          </h2>
          <div className="flex flex-col gap-2">
            <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 shadow-sm">
              <h3 className="font-semibold text-green-800">Project setup</h3>
              <p className="text-sm text-gray-500">
                Initialized Next.js & Tailwind
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-12 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Kanban Board. All rights reserved.
      </footer>
    </div>
  )
}
