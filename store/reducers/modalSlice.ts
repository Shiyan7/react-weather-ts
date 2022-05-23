import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenModal: false
}

export const modalSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleModal: state => {
            state.isOpenModal = !state.isOpenModal
        }
    }
})

export const {toggleModal} = modalSlice.actions
export const modalReducer = modalSlice.reducer