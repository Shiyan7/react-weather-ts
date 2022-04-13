import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menuSlice";
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        menu: menuReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
})

export type TypeRootState = ReturnType<typeof store.getState>