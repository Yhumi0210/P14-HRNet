import { configureStore } from '@reduxjs/toolkit'
import employeeSliceReducer from '../features/employeeSlice.js'

export const store = configureStore({
    reducer: {
        employee: employeeSliceReducer
    },
})