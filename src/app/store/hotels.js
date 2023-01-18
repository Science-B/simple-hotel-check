import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../utils/formatDate";

import hotelService from "../services/hotels-service";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    entities: [],
    date: formatDate(),
    days: "1",
    city: "Москва",
    isLoading: true,
    error: null,
  },
  reducers: {
    hotelsRequested: (state) => {
      state.isLoading = true;
    },
    hotelsRecived: (state, action) => {
      state.entities = action.payload.hotels;
      console.log("action payload", action.payload.hotels);
      state.city = action.payload.city || state.city;
      state.date = action.payload.date || state.date;
      state.days = action.payload.days || state.days;
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

export const loadHotelsList = (city, days, date) => async (dispatch) => {
  dispatch(hotelsRequested());
  try {
    const { results } = await hotelService.get(city ? city : "Москва");
    dispatch(hotelsRecived({ ...results, city, days, date }));
  } catch (error) {
    dispatch(hotelsRequestFailed(error.message));
  }
};

export const getHotels = () => (state) => state.hotels;

export const getHotelsLoadingStatus = () => (state) => state.hotels.isLoading;

export default hotelsReducer;
