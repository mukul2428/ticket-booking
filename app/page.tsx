"use client";
import { useSelector } from "react-redux";
import HomeAllEvents from "./ui/homeAllEvents";
import { RootState } from "./state/store";
export default function Home() {
  const userData = useSelector((state: RootState) => state.signup);
  console.log(userData);
  return (
    <>
      <HomeAllEvents />
    </>
  );
}
