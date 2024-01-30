import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginDataSlice from "./userData/loginDataSlice";
import sellTicketsSlice from "./userData/sellTicketsSlice";
import signUpDataSlice from "./userData/signUpDataSlice";
import { persistReducer } from "redux-persist";
import allEventDataSlice from "./userData/allEventDataSlice";
import storage from "./storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

// const rootReducer = combineReducers({
//   // we have userReducer slice here
//   // we can have many slices here
//   login: loginDataSlice,
//   sellTickets: sellTicketsSlice,
//   signup: signUpDataSlice,
//   allEvents: allEventDataSlice
// });

const appReducer = combineReducers({
  // we have userReducer slice here
  // we can have many slices here
  login: loginDataSlice,
  sellTickets: sellTicketsSlice,
  signup: signUpDataSlice,
  allEvents: allEventDataSlice
});

const rootReducer = (state: any, action: any) => {
  // Used to clear the persisted store data on a specific action.
  // Reference: https://bionicjulia.com/blog/clear-redux-toolkit-state-with-redux-persist-and-typescript
  if (action.type === "error/removeReduxData") {
    storage.removeItem("persis:root");
    storage.removeItem("accessToken");
    storage.removeItem("accessTimestampExpiry");
    state = {};
  }
  // Set the loader to false. For special scenario, where loader was persisted as
  // true into the storage causing Loader to run endlessly. Ideally this will never happen
  // if (state) state.loader = false;
  return appReducer(state, action);
};

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
