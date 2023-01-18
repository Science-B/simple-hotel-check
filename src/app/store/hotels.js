import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../utils/formatDate";

import hotelService from "../services/hotels-service";
import { getRandomInt } from "../utils/getRandomInt";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    entities: [],
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
const { hotelsRequested, hotelsRecived, hotelsRequestFailed } = actions;

export const loadHotelsList = (city, days, date) => async (dispatch) => {
  dispatch(hotelsRequested());
  try {
    const { results } = await hotelService.get(city ? city : "Москва");

    const hotels = results.hotels.map((el) => {
      return {
        ...el,
        rate: getRandomInt(1, 5),
        date: date ? date : formatDate(),
        days: days ? days : "1",
        price: getRandomInt(15, 35) + " " + getRandomInt(111, 999),
      };
    });

    dispatch(
      hotelsRecived({
        ...{ hotels },
        city,
      })
    );
  } catch (error) {
    dispatch(hotelsRequestFailed(error.message));
  }
};

export const getHotels = () => (state) => state.hotels;

export const getHotelsLoadingStatus = () => (state) => state.hotels.isLoading;

export default hotelsReducer;
