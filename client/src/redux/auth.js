import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    token: "",
    email: "",
    userId: null,
  },
  reducers: {
    loginAccount: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
    logoutAccount: (state, action) => {
      state.userName = "";
      state.token = "";
      state.email = "";
      state.userId = null;
    },
  },
});

export const { loginAccount, logoutAccount } = authSlice.actions;
export default authSlice.reducer;
