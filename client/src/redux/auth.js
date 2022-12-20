import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    token: "",
  },
  reducers: {
    loginAccount: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
    },
    logoutAccount: (state, action) => {
      state.userName = "";
      state.token = "";
    },
  },
});

export const { loginAccount, logoutAccount } = authSlice.actions;
export default authSlice.reducer;
