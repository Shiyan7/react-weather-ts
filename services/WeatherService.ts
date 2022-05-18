import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { ICoord } from '../models/ICoord';
import { IWeather } from '../models/IWeather';
import { API_KEY, BASE_URL } from "../utils/consts";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getWeatherByLocation: build.query<IWeather, ICoord>({
      query: arg => `onecall?lat=${arg.lat}&lon=${arg.lon}&appid=${API_KEY}&units=metric&lang=ru`
    }),
  }),
});

export const { useGetWeatherByLocationQuery } = weatherAPI;