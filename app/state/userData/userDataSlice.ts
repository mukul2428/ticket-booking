import { userState } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: userState = {
  loggedIn: false,
  email: "",
  password: "",
  rememberMe: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userState>) => {
      state.loggedIn = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.rememberMe = action.payload.rememberMe;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.email = "";
      state.password = "";
    },
  },
});

//we can now directly access the actions
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
