"use client";
import { Provider } from "react-redux";
import { store } from "./state/store";
import HomeImg from "./ui/homeImg";
import Login from "./ui/login";
export default function Home() {
  return (
    <Provider store={store}>
      <Login />
      <HomeImg />
    </Provider>
  );
}
