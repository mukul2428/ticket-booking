"use client";

import { setPrice } from "@/app/state/userData/sellTicketsSlice";
import { priceInputs } from "@/app/types";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import DisplayEventImage from "@/app/ui/displayEventImage";

const SalePrice = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<priceInputs>();

  const onSubmit: SubmitHandler<priceInputs> = (data) => {
    dispatch(setPrice({ price: data.price }));
    router.push("/sell-tickets/ticket-details/sale-price/my-ads", {
      scroll: false,
    });
  };
  return (
    <>
      <DisplayEventImage />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col p-10 m-10 w-3/5">
          <div className="flex flex-row">
            <span className="text-3xl font-bold">Sale</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Price
            </span>
          </div>
          <input
            type="text"
            className="common-input"
            placeholder="$"
            {...register("price", {
              required: true,
            })}
          />
          <input
            type="range"
            min="100"
            max="1500"
            className="mt-4 bg-gray-200 cursor-pointer"
          />
          <div className="p-6 m-4 rounded-lg bg-blue-950 text-white text-xs">
            You are unlikly to sell the ticket at this price
          </div>
          <button className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg">
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default SalePrice;
