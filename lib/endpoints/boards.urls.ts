export const boardsURL = {
  BOARDS_ENDPOINT: () =>
    new URL("/rest/v1/boards", process.env.NEXT_PUBLIC_SUPABASE_URL),

  url_getAllBoards: function () {
    const url = this.BOARDS_ENDPOINT()
    url.searchParams.set("order", "updated_at.desc")
    return url.toString()
  },

  url_createBoards: function () {
    const url = this.BOARDS_ENDPOINT()
    url.searchParams.set("select", "*")
    return url.toString()
  },

  url_getBoardById: function (id: string) {
    const url = this.BOARDS_ENDPOINT()
    url.searchParams.set("id", `eq.${id}`)
    url.searchParams.set("select", "*,columns(*)")
    return url.toString()
  },

  url_updateBoardById: function (id: string) {
    const url = this.BOARDS_ENDPOINT()
    url.searchParams.set("id", `eq.${id}`)
    return url.toString()
  },

  url_deleteBoardByid: function (id: string) {
    const url = this.BOARDS_ENDPOINT()
    url.searchParams.set("id", `eq.${id}`)
    return url.toString()
  },
}
