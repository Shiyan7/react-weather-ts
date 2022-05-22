import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { API_KEY, BASE_URL } from '../constants/api';
import { ICoord } from '../types/ICoord';
import { IWeather } from '../types/IWeather';

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getWeatherByLocation: build.query<IWeather, ICoord>({
      query: coords => `onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=ru`
    }),
  }),
});

export const { useGetWeatherByLocationQuery } = weatherAPI;