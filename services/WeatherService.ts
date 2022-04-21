import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { useAppSelector } from '../hooks/redux';
import { IWeather } from '../types/IWeather';
import { API_KEY, BASE_URL } from "../utils/consts";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getWeatherByCity: build.query<IWeather, string>({
      query: (city) => `forecast.json?key=${API_KEY}&q=${city}`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherAPI;