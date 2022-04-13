import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenMenu: false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: state => {
            return {isOpenMenu: !state.isOpenMenu}
        }
    }
})

export const menuReducer = menuSlice.reducer;
export const menuActions = menuSlice.actions;