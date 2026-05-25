import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchTerm: "",

  currentPage: 1,
  rowsPerPage: 3, 
}

const tableSlice = createSlice({
  name: "table",
  initialState,

  reducers: {
    setSearchTerm: (state, actions) => {
      state.searchTerm = actions.payload
      state.currentPage = 1
    },

    nextPage: (state) => {
      state.currentPage += 1
    },

    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1
      }
    },
  },
})

export const { setSearchTerm, nextPage, prevPage } = tableSlice.actions
export default tableSlice.reducer
