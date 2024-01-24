"use client";

import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function ReduxProvider({ children }: PropsWithChildren) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
