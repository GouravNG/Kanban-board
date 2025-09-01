export const columnsURL = {
  COLUMNS_ENDPOINT: () =>
    new URL("/rest/v1/columns", process.env.NEXT_PUBLIC_SUPABASE_URL),
  url_CreateCol: function () {
    const url = this.COLUMNS_ENDPOINT()
    return url.toString()
  },
  url_getTasksByColumnId: function (c_id: number) {
    const url = this.COLUMNS_ENDPOINT()
    url.searchParams.set("id", `eq.${c_id}`)
    url.searchParams.set("select", "*,tasks(*)")
    url.searchParams.set("tasks.order", "priority.asc")
    return url.toString()
  },
  url_updateColumn: function (c_id: number) {
    const url = this.COLUMNS_ENDPOINT()
    url.searchParams.set("id", `eq.${c_id}`)
    return url.toString()
  },
  url_deleteColumn: function (c_id: number) {
    const url = this.COLUMNS_ENDPOINT()
    url.searchParams.set("id", `eq.${c_id}`)
    return url.toString()
  },
}
