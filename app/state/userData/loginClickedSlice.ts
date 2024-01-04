import { loginClicked } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: loginClicked = false;

const loginClickedSlice = createSlice({
  name: "loginClicked",
  initialState,
  reducers: {
    loginClick: (state) => {
      // Correct way to mutate state
      return true;
    },
    loginNotClick: (state) => {
      // Correct way to mutate state
      return false;
    },
  },
});

//we can now directly access the actions
export const { loginClick, loginNotClick } = loginClickedSlice.actions;

export default loginClickedSlice.reducer;
