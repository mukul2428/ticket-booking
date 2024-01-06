import { loginInputs } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: loginInputs = {
  email: "",
  password: "",
  rememberMe: ""
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginInputs>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.rememberMe = action.payload.rememberMe;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

//we can now directly access the actions
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
