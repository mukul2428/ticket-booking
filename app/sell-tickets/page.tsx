"use client";
import React from "react";
import Header from "../ui/header";
import { Provider } from "react-redux";
import { store } from "../state/store";
import EventDetail from "./eventdetail";
const SellTickets = () => {
  return (
    <Provider store={store}>
      <Header />
      <EventDetail />
    </Provider>
  );
};

export default SellTickets;
