"use client";

import Header from "./ui/header";
import { store } from "./state/store";
import { Provider } from "react-redux";
import HomeImg from "./ui/homeImg";
import Login from "./ui/login";
export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Login />
      <HomeImg />
    </Provider>
  );
}
