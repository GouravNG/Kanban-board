export const tasksURL = {
  TASKS_ENDPOINT: () =>
    new URL("/rest/v1/tasks", process.env.NEXT_PUBLIC_SUPABASE_URL),

  url_createTask: function () {
    const url = this.TASKS_ENDPOINT()
    url.searchParams.set("select", "*")
    return url.toString()
  },
}
