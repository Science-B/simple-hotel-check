import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loggedIn: (state, action) => {
      state.user = action.payload;
    },
    loggedOut: (state) => {
      state.user = null;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;

export const { loggedIn, loggedOut } = actions;

export const getCurrentUser = () => (state) => state.user;

export default userReducer;
