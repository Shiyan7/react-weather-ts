import { createSlice } from "@reduxjs/toolkit";
import { ICoord } from "../../types/ICoord";

interface IState {
  location: ICoord
}

const initialState: IState = {
  location: {
    lat: 0, lon: 0
  }
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  setLocation,
} = weatherSlice.actions;

export default weatherSlice.reducer;