import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "@/api/fetchWeather";
import { IWeather } from "@/types/IWeather";

interface IState {
  data: IWeather | null;
  isLoading: boolean;
  error: boolean
}

const initialState: IState = {
  data: null,
  isLoading: true,
  error: false
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeather.fulfilled.type]: (state, action: PayloadAction<IWeather>) => {
      state.isLoading = false;
      state.error = false;
      state.data = action.payload
    },
    [fetchWeather.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchWeather.rejected.type]: state => {
      state.isLoading = false
      state.error = true
    }
  }
});

export const weatherReducer =  weatherSlice.reducer;