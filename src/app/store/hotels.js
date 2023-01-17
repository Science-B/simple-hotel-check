import { createSlice } from "@reduxjs/toolkit";

import hotelService from "../services/hotels-service";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    hotelsRequested: (state) => {
      state.isLoading = true;
    },
    hotelsRecived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    hotelsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: hotelsReducer, actions } = hotelsSlice;
const { hotelsRequested, hotelsRecived, hotelsRequestFailed } = actions;

export const loadHotelsList = () => async (dispatch) => {
  dispatch(hotelsRequested());
  try {
    const { results } = await hotelService.get();
    dispatch(hotelsRecived(results));
  } catch (error) {
    dispatch(hotelsRequestFailed(error.message));
  }
};

export const getHotels = () => (state) => state.hotels.entities;

export const getHotelsLoadingStatus = () => (state) => state.hotels.isLoading;

export default hotelsReducer;
