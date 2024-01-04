"use client";
import React from "react";
import Header from "../ui/header";
import { Provider } from "react-redux";
import { store } from "../state/store";

const SellTickets = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default SellTickets;
