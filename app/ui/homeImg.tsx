"use client";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Events from "./events";
import { useState } from "react";
import { EventContext } from "../hooks/context";

const HomeImg = () => {
  const userData = useSelector((state: RootState) => state.user);
  const [eventsData, seteventsData] = useState([
    {
      id: 0,
      imageType: "football.jpg",
      eventName: "football",
      eventLocation: "Mumbai",
      eventTime: "3PM",
      eventDay: "12 January",
      eventTickets: "23",
      eventPrice: "$2323",
    },
    {
      id: 1,
      imageType: "football.jpg",
      eventName: "basketball",
      eventLocation: "Chennai",
      eventTime: "8PM",
      eventDay: "12 December",
      eventTickets: "23",
      eventPrice: "$2323",
    },
    {
      id: 2,
      imageType: "football.jpg",
      eventName: "concert",
      eventLocation: "Gurugram",
      eventTime: "3PM",
      eventDay: "12 January",
      eventTickets: "23",
      eventPrice: "$2323",
    },
  ]);
  return (
    <>
      <div className="">
        <img
          src="/CrowedImage.png"
          className="w-screen h-screen"
          alt="Home Page Image"
        />
      </div>
      {userData.loggedIn ? (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="font-poppins-bold text-white font-helvetica text-4xl font-bold ">
              <div className="text-center">Buy and sell tickets</div>
              <div className="text-center">for thousands of events!</div>
            </div>
            <div className="p-2 rounded-md bg-white mt-4 flex flex-row">
              <div className="ml-3 flex items-center">
                <img className="w-4" src="/EventSearch.png" alt="werwer" />
                <input
                  className="p-4 mr-2 rounded-md border-none outline-none"
                  placeholder="Look for an Event"
                  type="text"
                />
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 bg-gray-200"></div>
              <div className="ml-3 flex items-center">
                <img className="w-4" src="/Location.png" alt="werwer" />
                <input
                  className="p-4 ml-2 rounded-md border-none outline-none"
                  type="text"
                  placeholder="Location"
                />
              </div>
              <button className="ml-4 px-4 text-white  bg-orange-600 text-sm rounded-md">
                Search Now
              </button>
            </div>
          </div>
          <div className="flex flex-row my-6 justify-center">
            <div className="text-3xl">
              <span className="font-bold">Upcoming</span>&nbsp;
              <span className="font-extrabold text-orange-600">Events</span>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 33 30"
                fill="none"
              >
                <path
                  d="M29.4231 2.30769H25.3846V0.576923C25.3846 0.230769 25.1538 0 24.8077 0C24.4615 0 24.2308 0.230769 24.2308 0.576923V2.30769H19.6154V0.576923C19.6154 0.230769 19.3846 0 19.0385 0C18.6923 0 18.4615 0.230769 18.4615 0.576923V2.30769H13.8462V0.576923C13.8462 0.230769 13.6154 0 13.2692 0C12.9231 0 12.6923 0.230769 12.6923 0.576923V2.30769H8.07692V0.576923C8.07692 0.230769 7.84615 0 7.5 0C7.15385 0 6.92308 0.230769 6.92308 0.576923V2.30769H2.88462C1.26923 2.30769 0 3.57692 0 5.19231V27.1154C0 28.7308 1.26923 30 2.88462 30H29.4231C31.0385 30 32.3077 28.7308 32.3077 27.1154V5.19231C32.3077 3.57692 31.0385 2.30769 29.4231 2.30769ZM2.88462 3.46154H6.92308V5.19231C6.92308 5.53846 7.15385 5.76923 7.5 5.76923C7.84615 5.76923 8.07692 5.53846 8.07692 5.19231V3.46154H12.6923V5.19231C12.6923 5.53846 12.9231 5.76923 13.2692 5.76923C13.6154 5.76923 13.8462 5.53846 13.8462 5.19231V3.46154H18.4615V5.19231C18.4615 5.53846 18.6923 5.76923 19.0385 5.76923C19.3846 5.76923 19.6154 5.53846 19.6154 5.19231V3.46154H24.2308V5.19231C24.2308 5.53846 24.4615 5.76923 24.8077 5.76923C25.1538 5.76923 25.3846 5.53846 25.3846 5.19231V3.46154H29.4231C30.4038 3.46154 31.1538 4.21154 31.1538 5.19231V9.23077H1.15385V5.19231C1.15385 4.21154 1.90385 3.46154 2.88462 3.46154ZM29.4231 28.8462H2.88462C1.90385 28.8462 1.15385 28.0962 1.15385 27.1154V10.3846H31.1538V27.1154C31.1538 28.0962 30.4038 28.8462 29.4231 28.8462Z"
                  fill="#A3A3A3"
                />
              </svg>
            </span>

            <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
          </div>
          <div className="flex justify-around my-6 py-4 mx-8">
            {eventsData.map((event) => {
              return (
                <EventContext.Provider value={event}>
                  <Events key={event.id} />
                </EventContext.Provider>
              );
            })}
          </div>
          <div className="flex flex-row justify-center">
            <button className="m-4 p-4 border-2 border-orange-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
              >
                <path
                  d="M9.11836 0.881643C9.60528 0.394725 10.3947 0.394725 10.8816 0.881644C11.3683 1.36825 11.3686 2.1571 10.8824 2.64414L4.7875 8.75L28.75 8.75C29.4404 8.75 30 9.30964 30 10C30 10.6904 29.4404 11.25 28.75 11.25L4.7875 11.25L10.8863 17.3379C11.377 17.8277 11.3773 18.6227 10.8871 19.1129C10.3972 19.6028 9.60283 19.6028 9.1129 19.1129L4.37114e-07 10L9.11836 0.881643Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className="text-sm m-4 p-4 border-2 border-orange-600 rounded-lg">
              View More Events
            </button>
            <button className="m-4 p-4 border-2 border-orange-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
              >
                <path
                  d="M20.8816 0.881643C20.3947 0.394725 19.6053 0.394725 19.1184 0.881644C18.6317 1.36825 18.6314 2.1571 19.1176 2.64414L25.2125 8.75L1.25 8.75C0.559642 8.75 -4.06937e-07 9.30964 -4.37114e-07 10C-4.6729e-07 10.6904 0.559644 11.25 1.25 11.25L25.2125 11.25L19.1137 17.3379C18.623 17.8277 18.6227 18.6227 19.1129 19.1129C19.6028 19.6028 20.3972 19.6028 20.8871 19.1129L30 10L20.8816 0.881643Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-row my-6 justify-center mt-10">
            <div className="text-3xl">
              <span className="font-bold">Follow Your</span>&nbsp;
              <span className="font-extrabold text-orange-600">Team</span>&nbsp;
              <span className="font-bold">Closely</span>&nbsp;
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="32"
                viewBox="0 0 54 32"
                fill="none"
              >
                <path
                  d="M52.5905 30.8115C52.0997 30.9148 51.6256 30.5873 51.4724 30.1097C49.6269 24.3558 41.1747 24.3456 39.3058 30.0791C39.1444 30.5742 38.655 30.9164 38.1444 30.8142C37.6448 30.7143 37.3129 30.2283 37.4538 29.7387C39.6949 21.9511 51.1286 21.9693 53.2471 29.7931C53.3726 30.2567 53.0606 30.7125 52.5905 30.8115ZM16.3466 30.8115C15.8558 30.9148 15.3817 30.5873 15.2285 30.1097C13.383 24.3558 4.93079 24.3456 3.06188 30.0791C2.90049 30.5742 2.41113 30.9164 1.90047 30.8142C1.40088 30.7143 1.06898 30.2283 1.20988 29.7387C3.45101 21.9511 14.8847 21.9693 17.0032 29.7931C17.1287 30.2567 16.8167 30.7125 16.3466 30.8115ZM45.3841 22.9512C41.8171 22.9512 38.9817 20.1159 38.9817 16.5488C38.9817 12.9817 41.8171 10.1463 45.3841 10.1463C48.9512 10.1463 51.7866 12.9817 51.7866 16.5488C51.7866 20.1159 48.9512 22.9512 45.3841 22.9512ZM45.3841 11.9756C42.8232 11.9756 40.811 13.9878 40.811 16.5488C40.811 19.1098 42.8232 21.122 45.3841 21.122C47.9451 21.122 49.9573 19.1098 49.9573 16.5488C49.9573 13.9878 47.9451 11.9756 45.3841 11.9756ZM9.14024 22.9512C5.57317 22.9512 2.7378 20.1159 2.7378 16.5488C2.7378 12.9817 5.57317 10.1463 9.14024 10.1463C12.7073 10.1463 15.5427 12.9817 15.5427 16.5488C15.5427 20.1159 12.7073 22.9512 9.14024 22.9512ZM9.14024 11.9756C6.57927 11.9756 4.56707 13.9878 4.56707 16.5488C4.56707 19.1098 6.57927 21.122 9.14024 21.122C11.7012 21.122 13.7134 19.1098 13.7134 16.5488C13.7134 13.9878 11.7012 11.9756 9.14024 11.9756ZM34.4686 21.6651C33.9778 21.7685 33.5036 21.441 33.3505 20.9634C31.505 15.2094 23.0527 15.1992 21.1838 20.9327C21.0224 21.4279 20.5331 21.77 20.0224 21.6679C19.5228 21.568 19.1909 21.082 19.3318 20.5924C21.573 12.8048 33.0066 12.8229 35.1251 20.6467C35.2507 21.1104 34.9386 21.5662 34.4686 21.6651ZM27.2622 13.8049C23.6951 13.8049 20.8598 10.9695 20.8598 7.40244C20.8598 3.83537 23.6951 1 27.2622 1C30.8293 1 33.6646 3.83537 33.6646 7.40244C33.6646 10.9695 30.8293 13.8049 27.2622 13.8049ZM27.2622 2.82927C24.7012 2.82927 22.689 4.84146 22.689 7.40244C22.689 9.96341 24.7012 11.9756 27.2622 11.9756C29.8232 11.9756 31.8354 9.96341 31.8354 7.40244C31.8354 4.84146 29.8232 2.82927 27.2622 2.82927Z"
                  fill="#A3A3A3"
                  stroke="#F9F9F9"
                  strokeWidth="0.5"
                />
              </svg>
            </span>

            <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
          </div>
          <div className="flex justify-around my-6 py-4 mx-8">
            {eventsData.map((event) => {
              return (
                <EventContext.Provider value={event}>
                  <Events key={event.id} />
                </EventContext.Provider>
              );
            })}
          </div>
          <div className="flex flex-row justify-center">
            <button className="m-4 p-4 border-2 border-orange-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
              >
                <path
                  d="M9.11836 0.881643C9.60528 0.394725 10.3947 0.394725 10.8816 0.881644C11.3683 1.36825 11.3686 2.1571 10.8824 2.64414L4.7875 8.75L28.75 8.75C29.4404 8.75 30 9.30964 30 10C30 10.6904 29.4404 11.25 28.75 11.25L4.7875 11.25L10.8863 17.3379C11.377 17.8277 11.3773 18.6227 10.8871 19.1129C10.3972 19.6028 9.60283 19.6028 9.1129 19.1129L4.37114e-07 10L9.11836 0.881643Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className="text-sm m-4 p-4 border-2 border-orange-600 rounded-lg">
              View More Teams
            </button>
            <button className="m-4 p-4 border-2 border-orange-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
              >
                <path
                  d="M20.8816 0.881643C20.3947 0.394725 19.6053 0.394725 19.1184 0.881644C18.6317 1.36825 18.6314 2.1571 19.1176 2.64414L25.2125 8.75L1.25 8.75C0.559642 8.75 -4.06937e-07 9.30964 -4.37114e-07 10C-4.6729e-07 10.6904 0.559644 11.25 1.25 11.25L25.2125 11.25L19.1137 17.3379C18.623 17.8277 18.6227 18.6227 19.1129 19.1129C19.6028 19.6028 20.3972 19.6028 20.8871 19.1129L30 10L20.8816 0.881643Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default HomeImg;
