import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../../types/IWeather";

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
  reducers: {
    weatherFetching: state => {
      state.isLoading = true;
    },
    weatherFetchingSuccess: (state, action: PayloadAction<IWeather>) => {
      state.isLoading = false;
      state.error = false;
      state.data = action.payload
    },
    weatherFetchingError: state => {
      state.isLoading = false
      state.error = true
    }
  },
});

export const weatherReducer =  weatherSlice.reducer
export const weatherActions =  weatherSlice.actions