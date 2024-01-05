"use client";
import { setTicketData } from "@/app/state/userData/sellTicketsSlice";
import { ticketDataInputs } from "@/app/types";
import TickRectangle from "@/app/ui/ticket-details/ticketRectangle";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
const TicketDetails = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ticketDataInputs>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ticketDataInputs> = (data) => {
    dispatch(
      setTicketData({
        noOfTickets: data.noOfTickets,
        ticketFormat: data.ticketFormat,
        ticketLocation: data.ticketLocation,
        ticketQueue: data.ticketQueue,
        restrictions: data.restrictions,
        advantages: data.advantages,
        readyTicket: data.readyTicket,
      })
    );
    router.push("/sell-tickets/ticket-details/sale-price", { scroll: false });
  };
  const requirements = [
    "Alcohol Free Area",
    "Limited View",
    "Corridor Side",
    "Visiting Team",
    "Student Ticket",
    "Elderly Ticket",
    "Child Ticket",
    "Wheelchair Access",
    "Children can participate in activity under the supervision of their parents",
  ];
  const advantages = [
    "VIP Entrance",
    "Hospitality",
    "Meet & Greet",
    "Early Entry",
    "Parking Included",
    "Ticket & Hotel Package",
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-10 m-10 w-3/5"
    >
      <div className="flex flex-row">
        <span className="text-3xl font-bold">Number of</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">Tickets</span>
      </div>
      <input
        type="number"
        className="common-input"
        placeholder="No of tickets"
        {...register("noOfTickets", {
          required: true,
        })}
      />
      {errors.noOfTickets && (
        <span className="text-xs text-red-500">Tickets Number is required</span>
      )}
      <div className="flex flex-row mt-4">
        <span className="text-3xl font-bold">Ticket</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">Format</span>
      </div>
      <div className="mt-4">
        {["Paper Ticket", "Season Combination Tickets", "E-ticket"].map(
          (category) => (
            <div key={category}>
              <input
                className="mx-1 mt-3 accent-orange-600"
                type="radio"
                id={category}
                {...register("ticketFormat", {
                  required: true,
                })}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          )
        )}
      </div>
      {errors.ticketFormat && (
        <span className="text-xs text-red-500">Ticket Format is required</span>
      )}
      <div className="flex flex-row mt-4">
        <span className="text-3xl font-bold">Ticket</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">
          Location
        </span>
      </div>
      <input
        type="text"
        className="common-input"
        placeholder="Location"
        {...register("ticketLocation", {
          required: true,
        })}
      />
      {errors.ticketLocation && (
        <span className="text-xs text-red-500">
          Ticket Location is required
        </span>
      )}
      <div className="flex flex-row mt-4">
        <span className="text-3xl font-bold">Ticket</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">Queue</span>
      </div>
      <input
        type="text"
        className="common-input"
        placeholder="Ticket queue"
        {...register("ticketQueue")}
      />
      <span className="mt-2 flex flex-row">
        <svg
          width="15"
          height="15"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0C6.7155 0 0 6.7155 0 15C0 23.2845 6.7155 30 15 30C23.2845 30 30 23.2845 30 15C30 6.7155 23.2845 0 15 0ZM16.5 22.5H13.5V13.5H16.5V22.5ZM16.5 10.5H13.5V7.5H16.5V10.5Z"
            fill="#E54220"
          />
        </svg>
        <span className="text-xs text-gray-400 mx-1">
          If there is no sequence number, leave it blank.
        </span>
      </span>
      <div className="flex flex-row mt-8">
        <span className="text-3xl font-bold">Restrictions and </span>
        <span className="text-3xl font-bold text-orange-600 mx-2">
          Requirements
        </span>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-2 auto-cols-minmax[0,1fr]">
        {requirements.map((category) => (
          <span key={category}>
            <TickRectangle category={category} />
          </span>
        ))}
      </div>
      <div className="flex flex-row mt-8">
        <span className="text-3xl font-bold">Advantages</span>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-2 auto-cols-minmax[0,1fr]">
        {advantages.map((category) => (
          <span key={category}>
            <TickRectangle category={category} />
          </span>
        ))}
      </div>
      <div className="flex flex-row mt-8">
        <span className="text-3xl font-bold">Are Your Tickets </span>
        <span className="text-3xl font-bold text-orange-600 mx-2">
          Ready for shipment?
        </span>
      </div>
      <div className="mt-4">
        {[
          "Yes, my tickets are ready.",
          "No, I don't have the tickets yet / I can't send it yet.",
        ].map((category) => (
          <div key={category}>
            <input
              className="mx-1 mt-3 accent-orange-600"
              type="radio"
              id={category}
              {...register("readyTicket", {
                required: true,
              })}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      {errors.readyTicket && (
        <span className="text-xs text-red-500">Ready For Shipment?</span>
      )}
      <button
        type="submit"
        className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
      >
        Continue
      </button>
    </form>
  );
};

export default TicketDetails;
