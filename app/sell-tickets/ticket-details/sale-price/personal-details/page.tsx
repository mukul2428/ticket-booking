"use client";
import DisplayEventImage from "@/app/ui/displayEventImage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { personalInfoInputs } from "@/app/types";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "@/app/state/userData/sellTicketsSlice";
import { useForm } from "react-hook-form";
const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<personalInfoInputs>();
  const router = useRouter();
  const dispatch = useDispatch();
  const [isAddressFields, setIsAddressFields] = useState(false);
  const handleAddress = () => {
    setIsAddressFields(!isAddressFields);
  };
  const onSubmit: SubmitHandler<personalInfoInputs> = (data) => {
    dispatch(
      setPersonalInfo({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
        country: data.country,
        province: data.province,
        postalCode: data.postalCode,
      })
    );
    router.push(
      "/sell-tickets/ticket-details/sale-price/personal-details/payment-details"
    );
  };
  return (
    <>
      <DisplayEventImage />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-10 m-10 w-3/5"
      >
        <div className="flex flex-row">
          <span className="text-3xl font-bold">Personal</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Information
          </span>
        </div>
        <div className="flex flex-row">
          <div className="mr-4 flex flex-col">
            <label className="font-semibold">Your Name</label>
            <input
              type="text"
              className="common-input"
              placeholder="Your Name"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <label className="font-semibold">Your Surname</label>
            <input
              type="text"
              className="common-input"
              placeholder="Your Surname"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-row">
          <span className="text-3xl font-bold">Contact</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Information
          </span>
        </div>
        <div className="flex flex-row">
          <div className="mr-4 flex flex-col">
            <label className="font-semibold">E-mail Address</label>
            <input
              type="text"
              className="common-input"
              placeholder="E-mail Address"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <label className="font-semibold">Your Phone</label>
            <input type="number" className="common-input" placeholder="+91" />
          </div>
        </div>
        <div className="mt-6 flex flex-row">
          <span className="text-3xl font-bold">Where will you</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Send Your Tickets?
          </span>
        </div>
        <div
          className="mt-1 text-xs underline text-orange-600 cursor-pointer"
          onClick={handleAddress}
        >
          Add New Address {!isAddressFields ? "+" : "-"}
        </div>
        {isAddressFields && (
          <>
            <div className="mt-6 flex flex-row">
              <span className="text-3xl font-bold">Address</span>
              <span className="text-3xl font-bold text-orange-600 mx-2">
                Details
              </span>
            </div>
            <div className="mt-1 flex flex-col">
              <label className="font-semibold">Address Title</label>
              <input
                type="text"
                className="common-input"
                placeholder="Address Title"
              />
            </div>
            <div className="mt-6 flex flex-row">
              <div className="mr-4 flex flex-col">
                <label className="font-semibold">Your Name</label>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Your Name"
                />
              </div>
              <div className="ml-4 flex flex-col">
                <label className="font-semibold">Your Surname</label>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Your Surname"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-row">
              <span className="text-3xl font-bold">Contact</span>
              <span className="text-3xl font-bold text-orange-600 mx-2">
                Information
              </span>
            </div>
            <div className="mt-2 flex flex-col">
              <label className="font-semibold">Your Phone</label>
              <input type="number" className="common-input" placeholder="+91" />
            </div>
            <div className="mt-6 flex flex-row">
              <div className="mr-4 flex flex-col">
                <label className="font-semibold">Country</label>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Country"
                />
              </div>
              <div className="ml-4 flex flex-col">
                <label className="font-semibold">Province</label>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Province"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <label className="font-semibold">Postal Code</label>
              <input
                type="text"
                className="common-input"
                placeholder="Postal Code"
              />
            </div>
          </>
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

export default PersonalDetails;
