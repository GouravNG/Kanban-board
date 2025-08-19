// import { create } from "zustand"
// import { useShallow } from "zustand/shallow"

// type CommonStores = {
//   isFiltering: boolean
//   isEditing: boolean
//   isDeleting: boolean
//   isCreatingBoard: boolean
//   toggleIsFiltering: () => void
//   toggleIsEditing: () => void
//   toggleIsDeleting: () => void
//   toggleIsCreatingBoard: () => void
// }

// const useCommonStore = create<CommonStores>((set) => ({
//   isFiltering: false,
//   isEditing: false,
//   isDeleting: false,
//   isCreatingBoard: false,
//   toggleIsFiltering: () => set((s) => ({ isFiltering: !s.isFiltering })),
//   toggleIsEditing: () => set((s) => ({ isEditing: !s.isEditing })),
//   toggleIsDeleting: () => set((s) => ({ isDeleting: !s.isDeleting })),
//   toggleIsCreatingBoard: () =>
//     set((s) => ({ isCreatingBoard: !s.isCreatingBoard })),
// }))

// export const useFilter = () =>
//   useCommonStore(
//     useShallow(({ isFiltering, toggleIsFiltering }) => ({
//       isFiltering,
//       toggleIsFiltering,
//     }))
//   )
// export const useEdit = () =>
//   useCommonStore(
//     useShallow(({ isEditing, toggleIsEditing }) => ({
//       isEditing,
//       toggleIsEditing,
//     }))
//   )
// export const useDelete = () =>
//   useCommonStore(
//     useShallow(({ isDeleting, toggleIsDeleting }) => ({
//       isDeleting,
//       toggleIsDeleting,
//     }))
//   )

// export const useCreateBoardForm = () =>
//   useCommonStore(
//     useShallow(({ isCreatingBoard, toggleIsCreatingBoard }) => ({
//       isCreatingBoard,
//       toggleIsCreatingBoard,
//     }))
//   )
