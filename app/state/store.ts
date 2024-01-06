import { configureStore } from "@reduxjs/toolkit";
import loginDataSlice from "./userData/loginDataSlice";
import sellTicketsSlice from "./userData/sellTicketsSlice";
import signUpDataSlice from "./userData/signUpDataSlice";
export const store = configureStore({
    reducer: {
        // we have userReducer slice here
        // we can have many slices here
        login: loginDataSlice,
        sellTickets: sellTicketsSlice,
        signup: signUpDataSlice
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;