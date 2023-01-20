import { createSlice } from "@reduxjs/toolkit";

const favoritedHotelsSlice = createSlice({
  name: "favoritedHotels",
  initialState: {
    entities: [],
  },
  reducers: {
    hotelAdded: (state, action) => {
      state.entities.push(action.payload);
    },
    hotelRemoved: (state, action) => {
      state.entities = state.entities.filter((h) => h.id !== action.payload);
    },
    allHotelsRemoved: (state) => {
      state.entities = [];
    },
    hotelsUpdated: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { reducer: favoritedHotelsReducer, actions } = favoritedHotelsSlice;
export const { hotelAdded, hotelRemoved, allHotelsRemoved, hotelsUpdated } =
  actions;

export const addHotel = (hotel) => (dispatch) => {
  dispatch(hotelAdded(hotel));
};

export const removeHotel = (hotelId) => (dispatch) => {
  console.log("hotelId", hotelId);
  dispatch(hotelRemoved(hotelId));
};

export const updateHotels = (hotels) => (dispatch) => {
  dispatch(hotelsUpdated(hotels));
};

export const getFavoritedHotels = () => (state) => state.favoritedHotels;
export default favoritedHotelsReducer;
