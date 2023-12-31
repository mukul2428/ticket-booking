import Header from "../Header/Header";
import Login from "../Login/Login";
import crowdImage from "../../assets/images/CrowedImage.png";
import { useState } from "react";
const HomePage = () => {
  return (
    <>
      <Header />
      <Login />
      <div>
        <img src={crowdImage} className="w-screen" alt="Home Page Image"></img>
      </div>
      <div className="text-black flex justify-center items-center">
        Buy and sell tickets for thousands of events!
      </div>
    </>
  );
};

export default HomePage;
