import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./reducers/menuSlice";
import { modalReducer } from "./reducers/modalSlice";
import { weatherReducer } from "./reducers/weatherSlice";
import { unitReducer } from "./reducers/unitSlice";

const rootReducer = combineReducers({
    menuReducer,
    modalReducer,
    weatherReducer,
    unitReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']