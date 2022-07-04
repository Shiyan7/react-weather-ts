import {API_KEY, BASE_URL} from '@/constants/api';
import {ICoord} from '@/types/ICoord';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
    'weather/fetchAll',
    async (coords: ICoord) => {
        const response = await axios.get(`${BASE_URL}onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=ru`)
        return response.data
    }
)