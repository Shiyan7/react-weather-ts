import { createSlice } from "@reduxjs/toolkit";
import { IWeather } from "../../types/IWeather";

interface IState {
    value: string
    weatherItems: IWeather[]
}

const initialState: IState = {
    value: '',
    weatherItems: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setValue: (state, action) => {
            return {...state, value: action.payload}
        },
        setWeather: (state, action) => {
            return {...state, weatherItems: [...state.weatherItems, action.payload]}
        }
    }
})

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;