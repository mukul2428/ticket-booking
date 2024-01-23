"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import { eventDataInputs } from "@/app/types";
import { setEventData } from "@/app/state/userData/sellTicketsSlice";
import { UploadImageSvg } from "@/app/ui/svgIcons";

const SellTickets = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<eventDataInputs>();

  const dispatch = useDispatch();

  const router = useRouter();

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<eventDataInputs> = (data) => {
    dispatch(
      setEventData({
        eventImage: uploadedImage as string,
        eventName: data.eventName,
        eventLocation: data.eventLocation,
        eventDate: data.eventDate,
        eventTime: data.eventTime,
        eventCategory: data.eventCategory,
      })
    );
    router.push("/seller/sell-tickets/ticket-details");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center bg-gray-400">
          <label
            htmlFor="imageInput"
            className="relative cursor-pointer rounded-lg overflow-hidden w-screen h-72"
          >
            {uploadedImage ? (
              <Image
                src={uploadedImage}
                alt="Uploaded"
                className="object-cover w-full h-full"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full text-white text-xs">
                <UploadImageSvg />
                <span className="text-2xl">Upload a cover photo</span>
              </div>
            )}
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="absolute inset-0 opacity-0"
              {...register("eventImage", {
                required: true,
              })}
              onChange={handleImageUpload}
            />
            {errors.eventImage && (
              <span className="text-xs text-red-500">
                Event Image is required
              </span>
            )}
          </label>
        </div>

        <div className="flex flex-col p-10 m-10 w-3/5">
          <div className="flex flex-row">
            <span className="text-3xl font-bold">Event</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Name
            </span>
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
              <span className="text-xs text-red-500">
                Event Date is required
              </span>
            )}
            <input
              type="time"
              className="common-input mx-4"
              {...register("eventTime", {
                required: true,
              })}
            />
            {errors.eventTime && (
              <span className="text-xs text-red-500">
                Event Time is required
              </span>
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
                  value={category}
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
        </div>
      </form>
    </>
  );
};

export default SellTickets;
