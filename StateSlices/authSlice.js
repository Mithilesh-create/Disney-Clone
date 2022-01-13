import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  userName: "",
  profilelogo: "",
};
export const authSlice = createSlice({
  name: "AuthValues",
  initialState,
  reducers: {
    getLogin: (state, action) => {
      state.auth = true;
      state.userName = action.payload.userName;
      state.profilelogo = action.payload.profilelogo;
    },
    getLogout: (state) => {
      state.auth = false;
      state.userName = null;
      state.profilelogo = null;
    },
  },
});
export const authSliceState = (state) => state.AuthValues.auth;
export const authSliceName = (state) => state.AuthValues.userName;
export const authSliceLogo = (state) => state.AuthValues.profilelogo;

export const { getLogin, getLogout } = authSlice.actions;
export default authSlice.reducer;
