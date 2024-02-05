import { loaderTypes } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: loaderTypes = {
  loader: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.loader = true;
    },
    hideLoader: (state) => {
      state.loader = false;
    },
  },
});

//we can now directly access the actions
export const { showLoader, hideLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
