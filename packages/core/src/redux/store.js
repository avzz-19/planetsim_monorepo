import { configureStore } from '@reduxjs/toolkit'
import agencyReducer from './agencyReducer'

export const store = configureStore({
  reducer: {
    agency: agencyReducer,
  },
})
