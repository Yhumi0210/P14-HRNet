import { createSlice } from '@reduxjs/toolkit'
import employeesData from '../mock/employeesData.js'

const initialState = {
    data: [],
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.data.push(action.payload)
        },
        initEmployees: (state) => {
            if (state.data.length === 0) {
                state.data = [...employeesData]
            }
        }
    },
})

export default employeeSlice.reducer

// Action creators are generated for each case reducer function
export const { addEmployee, initEmployees } = employeeSlice.actions