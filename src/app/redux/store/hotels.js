import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    entities: [],
    city: "",
    isLoading: true,
    error: null,
  },
  reducers: {
    hotelsRequested: (state) => {
      state.isLoading = true;
    },
    hotelsRecived: (state, action) => {
      state.entities = action.payload.hotels;
      state.city = action.payload.city || state.city;
      state.isLoading = false;
    },
    hotelsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: hotelsReducer, actions } = hotelsSlice;
export const { hotelsRequested, hotelsRecived, hotelsRequestFailed } = actions;

export const getHotels = () => (state) => state.hotels;

export const getHotelsLoadingStatus = () => (state) => state.hotels.isLoading;

export default hotelsReducer;
