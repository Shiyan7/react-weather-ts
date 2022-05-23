import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    unitTemp: '°C',
    unitSpeed: 'км/ч',
    unitPressure: 'mbar'
}

export const unitSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTemp: (state, action) => {
            state.unitTemp = action.payload
        },
        setSpeed: (state, action) => {
            state.unitSpeed = action.payload
        },
        setPressure: (state, action) => {
            state.unitPressure = action.payload
        }
    }
})

export const {setTemp, setSpeed, setPressure} = unitSlice.actions
export const unitReducer = unitSlice.reducer