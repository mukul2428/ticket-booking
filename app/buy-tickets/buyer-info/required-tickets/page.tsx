"use client";
import { useState } from "react";

const RequiredTickets = () => {
  const [selectedCircle, setSelectedCircle] = useState<number | null>(null);

  const handleCircleClick = (circleNumber: number) => {
    setSelectedCircle(circleNumber);
  };
  const circles = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <form className="flex flex-col p-10 m-10 w-3/5">
      <div className="flex flex-row">
        <span className="text-3xl font-bold">Required</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">Tickets</span>
      </div>
      <div className="flex flex-row items-center mt-4">
        {circles.map((circleNumber) => (
          <div
            key={circleNumber}
            className={`w-11 h-11 flex justify-center items-center rounded-full m-1 cursor-pointer font-semibold text-lg ${
              selectedCircle === circleNumber
                ? "bg-orange-600 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handleCircleClick(circleNumber)}
          >
            {circleNumber}
          </div>
        ))}
      </div>
      <div className="flex flex-row mt-4">
        <span className="text-3xl font-bold">Participant</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">
          Information
        </span>
      </div>
      <div className="mt-2 flex flex-row">
        <div className="mr-4 flex flex-col">
          <label className="font-semibold">Your Name</label>
          <input
            type="text"
            className="common-input"
            placeholder="Your Name"
            //   {...register("firstName", {
            //     required: true,
            //   })}
          />
          {/* {errors.firstName && (
              <span className="text-xs text-red-500">
                First Name is required
              </span>
            )} */}
        </div>
        <div className="ml-4 flex flex-col">
          <label className="font-semibold">Your Surname</label>
          <input
            type="text"
            className="common-input"
            placeholder="Your Surname"
            //   {...register("lastName", {
            //     required: true,
            //   })}
          />
          {/* {errors.lastName && (
              <span className="text-xs text-red-500">
                Last Name is required
              </span>
            )} */}
        </div>
      </div>
      <div className="mt-2 flex flex-row">
        <div className="mr-4 flex flex-col">
          <label className="font-semibold">Your Phone</label>
          <input
            type="number"
            className="common-input"
            placeholder="+91"
            //   {...register("phoneNumber", {
            //     required: true,
            //   })}
          />
          {/* {errors.phoneNumber && (
              <span className="text-xs text-red-500">
                Phone Number is required
              </span>
            )} */}
        </div>
        <div className="ml-4 flex flex-col">
          <label className="font-semibold">
            TR ID Number / Passport Number
          </label>
          <input
            type="text"
            className="common-input"
            placeholder="TR ID Number / Passport Number"
            //   {...register("email", {
            //     required: true,
            //   })}
          />
          {/* {errors.email && (
              <span className="text-xs text-red-500">
                Email is required
              </span>
            )} */}
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
      >
        Continue
      </button>
    </form>
  );
};

export default RequiredTickets;
