import { API_KEY, BASE_URL } from "../constants/api";
import { ICoord } from "../types/ICoord";
import { AppDispatch } from "../store/store";
import { weatherSlice } from "../store/reducers/weatherSlice";
import axios from "axios"

export const fetchWeather = (coords: ICoord) => async (dispatch: AppDispatch) => {
    try {
        dispatch(weatherSlice.actions.weatherFetching())
        const response = await axios.get(`${BASE_URL}onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=ru`)
        dispatch(weatherSlice.actions.weatherFetchingSuccess(response.data))
    } catch (e: unknown) {
        dispatch(weatherSlice.actions.weatherFetchingError())
    }
}