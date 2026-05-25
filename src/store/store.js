import { configureStore } from "@reduxjs/toolkit"
import tableReducer from "./tabelSlice"

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
})
