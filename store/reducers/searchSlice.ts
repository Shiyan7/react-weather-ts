import { createSlice } from "@reduxjs/toolkit";
import { IWeather } from "../../models/IWeather";

interface IState {
    value: string
    city: string
}

const initialState: IState = {
    value: '',
    city: 'London',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        },
        setCity: (state, action) => {
            state.city = action.payload
        },
    }
})

export const {
    setCity,
    setValue,
} = searchSlice.actions

export default searchSlice.reducer