import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {lat: 0, long: 0}
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