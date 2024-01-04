import { configureStore } from "@reduxjs/toolkit";
import loginClickedSlice from "./userData/loginClickedSlice";
import userDataSlice from "./userData/userDataSlice";
export const store = configureStore({
    reducer: {
        // we have userReducer slice here
        // we can have many slices here
        user: userDataSlice,
        loginClicked: loginClickedSlice
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;