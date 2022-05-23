import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./reducers/menuSlice";
import { weatherReducer } from "./reducers/weatherSlice";

const rootReducer = combineReducers({
    menuReducer,
    weatherReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']