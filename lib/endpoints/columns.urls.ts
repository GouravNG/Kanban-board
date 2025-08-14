export const columnsURL = {
  COLUMNS_ENDPOINT: () =>
    new URL("/rest/v1/boards", process.env.NEXT_PUBLIC_SUPABASE_URL),
  url_CreateCol: function () {
    const url = this.COLUMNS_ENDPOINT()
    return url.toString()
  },
}
