import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherAPI } from "../services/WeatherService";
import { menuReducer } from "./reducers/menuSlice";

const rootReducer = combineReducers({
    menuReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>