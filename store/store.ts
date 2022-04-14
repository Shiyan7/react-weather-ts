import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menuSlice";
import logger from 'redux-logger'
import { searchReducer } from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
})

export type TypeRootState = ReturnType<typeof store.getState>