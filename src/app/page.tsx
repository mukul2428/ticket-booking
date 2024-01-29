"use client";
import { useEffect } from "react";
import HomeAllEvents from "./ui/homeAllEvents";

export default function Home() {
  useEffect(() => {
    console.log("Home");
  });
  return (
    <>
      <HomeAllEvents />
    </>
  );
}
