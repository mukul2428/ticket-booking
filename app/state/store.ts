import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userData/userDataSlice";
import sellTicketsSlice from "./userData/sellTicketsSlice";
export const store = configureStore({
    reducer: {
        // we have userReducer slice here
        // we can have many slices here
        user: userDataSlice,
        sellTickets: sellTicketsSlice
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;