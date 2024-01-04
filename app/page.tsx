"use client";

import Header from "./ui/header";
import Login from "./ui/login";
import { store } from "./state/store";
import { Provider } from "react-redux";
import HomeImg from "./ui/homeImg";
import Selltickets from "./ui/selltickets";
export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Login />
      <HomeImg />
    </Provider>
  );
}
