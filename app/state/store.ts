import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userData/userDataSlice";
export const store = configureStore({
    reducer: {
        // we have userReducer slice here
        // we can have many slices here
        user: userReducer
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;