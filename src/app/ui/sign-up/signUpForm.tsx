import React from "react";
import { useForm } from "react-hook-form";

interface SignUpFormProps {
  register: ReturnType<typeof useForm>["register"];
  errors: ReturnType<typeof useForm>["formState"]["errors"];
}

const signUpForm: React.FC<any> = ({ register, errors }) => {
  return (
    <div className="flex flex-col p-10 m-10 w-3/5">
      <div className="mb-4 flex flex-row">
        <span className="text-3xl font-bold">Sign</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">Up</span>
      </div>
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
            {...register("fname", {
              required: true,
            })}
          />

          {errors.fname && (
            <span className="text-xs text-red-500">First Name is required</span>
          )}
        </div>
        <div className="ml-4 flex flex-col">
          <label className="font-semibold">Your Surname</label>
          <input
            type="text"
            className="common-input"
            placeholder="Your Surname"
            {...register("sname", {
              required: true,
            })}
          />

          {errors.sname && (
            <span className="text-xs text-red-500">Surname is required</span>
          )}
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
            {...register("email", {
              required: true,
            })}
          />

          {errors.email && (
            <span className="text-xs text-red-500">Email ID is required</span>
          )}
        </div>
        <div className="ml-4 flex flex-col">
          <label className="font-semibold">Your Phone</label>
          <input
            type="number"
            className="common-input"
            placeholder="+91"
            {...register("phoneNo", {
              required: true,
            })}
          />

          {errors.phoneNo && (
            <span className="text-xs text-red-500">
              Phone Number is required
            </span>
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-row">
        <span className="text-3xl font-bold">Set</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">
          Password
        </span>
      </div>
      <div className="flex flex-row">
        <div className="mr-4 flex flex-col">
          <label className="font-semibold">Password</label>
          <input
            type="password"
            className="common-input"
            placeholder="Set Password"
            {...register("password", {
              required: true,
            })}
          />

          {errors.password && (
            <span className="text-xs text-red-500">Password is required</span>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-row">
        <span className="text-3xl font-bold">Set</span>
        <span className="text-3xl font-bold text-orange-600 mx-2">Type</span>
      </div>
      <div className="flex flex-row">
        <div className="mr-4 flex flex-col">
          <label className="font-semibold">User Type</label>
          <div className="flex flex-row">
            {["Seller", "Buyer"].map((category, index) => (
              <div className={`border-2 border-orange-600 p-2 my-2 rounded-lg ${index == 0 ? "my-2" : "m-2"}  `} key={category}>
                <input
                  className="mx-1 mt-3 accent-orange-600"
                  type="radio"
                  id={category}
                  value={category}
                  {...register("userType", {
                    required: true,
                  })}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>

          {errors.userType && (
            <span className="text-xs text-red-500">User Type is required</span>
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-row">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            {...register("becomeMember")}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-orange-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
          <span className="mx-6 text-sm text-gray-400">
            By becoming a member, you accept the Membership Agreement and its
            annexes.
          </span>
        </label>
      </div>
      <div className="mt-6 flex flex-row">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            {...register("sendMail")}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-orange-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
          <span className="mx-6 text-sm text-gray-400">
            approve of sending me electronic messages such as e-mails, messages
          </span>
        </label>
      </div>
      <div className="mt-6 flex flex-row">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            {...register("shareData")}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-orange-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
        </label>
        <span className="mx-6 text-sm text-gray-400 whitespace-nowrap">
          I have my express informed consent and consent to the processing and
          sharing of my personal data requested during membership
        </span>
      </div>
      <button
        type="submit"
        className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
      >
        Sign Up
      </button>
    </div>
  );
};

export default signUpForm;
