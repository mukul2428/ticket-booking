import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginDataSlice from "./userData/loginDataSlice";
import sellTicketsSlice from "./userData/sellTicketsSlice";
import signUpDataSlice from "./userData/signUpDataSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import allEventDataSlice from "./userData/allEventDataSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  // we have userReducer slice here
  // we can have many slices here
  login: loginDataSlice,
  sellTickets: sellTicketsSlice,
  signup: signUpDataSlice,
  allEvents: allEventDataSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
