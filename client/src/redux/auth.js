import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    token: "",
    email: "",
  },
  reducers: {
    loginAccount: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logoutAccount: (state, action) => {
      state.userName = "";
      state.token = "";
      state.email = "";
    },
  },
});

export const { loginAccount, logoutAccount } = authSlice.actions;
export default authSlice.reducer;
