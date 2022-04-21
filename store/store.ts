import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { weatherAPI } from "../services/WeatherService";
import menuReducer from "./reducers/menuSlice";
import searchRedcuer from './reducers/searchSlice';

const rootReducer = combineReducers({
    menuReducer,
    searchRedcuer,
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
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']