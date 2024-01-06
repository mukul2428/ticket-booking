"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { eventDataInputs } from "../types";
import { useDispatch } from "react-redux";
import { setEventData } from "../state/userData/sellTicketsSlice";
import UploadPhoto from "../ui/uploadPhoto";
import { useState } from "react";

const SellTickets = () => {
  const [eventImage, setEventImage] = useState<string | null>(null);
  const handleImageUpload = (uploadedImage: string | null) => {
    setEventImage(uploadedImage);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<eventDataInputs>();

  const dispatch = useDispatch();

  const router = useRouter();

  const onSubmit: SubmitHandler<eventDataInputs> = (data) => {
    dispatch(
      setEventData({
        eventImage: eventImage as string,
        eventName: data.eventName,
        eventLocation: data.eventLocation,
        eventDate: data.eventDate,
        eventTime: data.eventTime,
        eventCategory: data.eventCategory,
      })
    );
    router.push("/sell-tickets/ticket-details", { scroll: false });
  };

  return (
    <>
      <UploadPhoto onImageUpload={handleImageUpload} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-10 m-10 w-3/5"
      >
        <div className="flex flex-row">
          <span className="text-3xl font-bold">Event</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">Name</span>
        </div>
        <input
          type="text"
          className="common-input"
          placeholder="Event Name"
          {...register("eventName", {
            required: true,
          })}
        />
        {errors.eventName && (
          <span className="text-xs text-red-500">Event Name is required</span>
        )}

        <div className="flex flex-row mt-8">
          <span className="text-3xl font-bold">Event</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Location
          </span>
        </div>
        <input
          type="text"
          className="common-input"
          placeholder="Event Location"
          {...register("eventLocation", {
            required: true,
          })}
        />
        {errors.eventLocation && (
          <span className="text-xs text-red-500">
            Event Location is required
          </span>
        )}

        <div className="flex flex-row mt-8">
          <span className="text-3xl font-bold">Event</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Date & Time
          </span>
        </div>
        <div className="flex-row">
          <input
            type="date"
            className="common-input"
            {...register("eventDate", {
              required: true,
            })}
          />
          {errors.eventDate && (
            <span className="text-xs text-red-500">Event Date is required</span>
          )}
          <input
            type="time"
            className="common-input mx-4"
            {...register("eventTime", {
              required: true,
            })}
          />
          {errors.eventTime && (
            <span className="text-xs text-red-500">Event Time is required</span>
          )}
        </div>

        <div className="flex flex-row mt-8">
          <span className="text-3xl font-bold">Event</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Category
          </span>
        </div>
        <div className="mt-4">
          {["Football", "Basketball", "Concert", "Other"].map((category) => (
            <div key={category}>
              <input
                className="mx-1 mt-3 accent-orange-600"
                type="radio"
                id={category}
                {...register("eventCategory", {
                  required: true,
                })}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        {errors.eventCategory && (
          <span className="text-xs text-red-500">
            Event Category is required
          </span>
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

export default SellTickets;
