"use client";

import { ExclaimationSvg } from "@/app/ui/svgIcons";

const BuyerPayment = () => {
  return (
    <form className="flex flex-col p-10 m-10 w-3/5">
      <div className="flex flex-row mt-4">
        <span className="text-3xl font-bold">Delivery and</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">
          Billing Information
        </span>
      </div>
      <div className="mt-2 flex flex-row w-full">
        <div className="mr-4 flex flex-col">
          <label className="font-semibold">Country</label>
          <input
            type="text"
            className="common-input"
            placeholder="Country"
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
          <label className="font-semibold">Province</label>
          <input
            type="text"
            className="common-input"
            placeholder="Province"
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
          <label className="font-semibold">District</label>
          <input
            type="number"
            className="common-input"
            placeholder="District"
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
          <label className="font-semibold">Address</label>
          <input
            type="text"
            className="common-input"
            placeholder="Address"
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
      <div className="flex flex-row mt-4">
        <span className="text-3xl font-bold">Summary of</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">Payment</span>
      </div>
      <div className="flex flex-row mt-4 justify-between">
        <div className="flex flex-col">
          <p className="font-semibold text-xl">Ticket</p>
          <p>Service Fee:</p>
          <p>Tax (VAT 20%):</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-orange-600 font-semibold text-xl">
            1 x $300.00 USD
          </p>
          <p className="text-orange-600 font-semibold">$30.00 USD</p>
          <p className="text-orange-600 font-semibold">$20.00 USD</p>
        </div>
      </div>
      <hr className="bg-gray-300 my-6"></hr>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="font-semibold text-xl">Total Amount</p>
          <p className="text-gray-500 text-xs flex flex-row items-center">
            <ExclaimationSvg />
            Ticket prices are determined by sellers.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-orange-600 font-semibold text-xl">$350.00 USD</p>
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

export default BuyerPayment;
