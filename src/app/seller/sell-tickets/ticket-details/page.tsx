"use client";
import { RootState } from "@/app/state/store";
import { setTicketData } from "@/app/state/userData/sellTicketsSlice";
import { ticketDataInputs } from "@/app/types";
import DisplayEventImage from "@/app/ui/displayEventImage";
import { ExclaimationSvg } from "@/app/ui/svgIcons";
import TickRectangle from "@/app/ui/ticket-details/ticketRectangle";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const TicketDetails = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ticketDataInputs>();
  const eventData = useSelector(
    (state: RootState) => state.sellTickets.eventsData
  );

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ticketDataInputs> = (data) => {
    dispatch(
      setTicketData({
        noOfTickets: data.noOfTickets,
        ticketFormat: data.ticketFormat,
        ticketLocation: data.ticketLocation,
        ticketQueue: data.ticketQueue,
        restrictions: requirementsSelected,
        advantages: advantagesSelected,
        readyTicket: data.readyTicket,
      })
    );
    router.push("/seller/sell-tickets/ticket-details/sale-price");
  };
  const requirements = [
    {
      id: 1,
      name: "Alcohol Free Area",
    },
    { id: 2, name: "Limited View" },
    { id: 3, name: "Corridor Side" },
    { id: 4, name: "Visiting Team" },
    { id: 5, name: "Student Ticket" },
    { id: 6, name: "Elderly Ticket" },
    { id: 7, name: "Child Ticket" },
    { id: 8, name: "Wheelchair Access" },
    {
      id: 9,
      name: "Children can participate in activity under the supervision of their parents",
    },
  ];
  const advantages = [
    { id: 1, name: "VIP Entrance" },
    { id: 2, name: "Hospitality" },
    { id: 3, name: "Meet & Greet" },
    { id: 4, name: "Early Entry" },
    { id: 5, name: "Parking Included" },
    { id: 6, name: "Ticket & Hotel Package" },
  ];

  const requirementsSelected: string[] = [];
  const advantagesSelected: string[] = [];

  return (
    <>
      <DisplayEventImage eventData={eventData} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-10 m-10 w-3/5"
      >
        <div className="flex flex-row">
          <span className="text-3xl font-bold">Number of</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Tickets
          </span>
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
          <span className="text-xs text-red-500">
            Tickets Number is required
          </span>
        )}
        <div className="flex flex-row mt-4">
          <span className="text-3xl font-bold">Ticket</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Format
          </span>
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
          <span className="text-xs text-red-500">
            Ticket Format is required
          </span>
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
          <ExclaimationSvg />
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
            <span key={category.id}>
              <TickRectangle
                categoryName={category.name}
                requirementsSelected={requirementsSelected}
              />
            </span>
          ))}
        </div>
        <div className="flex flex-row mt-8">
          <span className="text-3xl font-bold">Advantages</span>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-2 auto-cols-minmax[0,1fr]">
          {advantages.map((category) => (
            <span key={category.id}>
              <TickRectangle
                categoryName={category.name}
                requirementsSelected={advantagesSelected}
              />
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
    </>
  );
};

export default TicketDetails;
