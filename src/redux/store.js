import { configureStore } from '@reduxjs/toolkit'
import vendorReducer from "./slices/fetchedDataslice"
import authSlice from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    vendor:vendorReducer
  },
})

