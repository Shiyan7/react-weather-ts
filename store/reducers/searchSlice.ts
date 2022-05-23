import { createSlice } from "@reduxjs/toolkit";

interface IState {
    value: string
    city: string
}

const initialState: IState = {
    value: '',
    city: '',
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

export const searchReducer =  searchSlice.reducer
export const searchActions =  searchSlice.actions