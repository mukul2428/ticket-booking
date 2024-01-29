import { loginInputs } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: loginInputs = {
  email: "",
  password: "",
  rememberMe: "",
  userType: "Seller",
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginInputs>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.rememberMe = action.payload.rememberMe;
      state.userType = action.payload.userType;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
      state.rememberMe = "";
      state.userType = "Seller";
    },
  },
});

//we can now directly access the actions
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
