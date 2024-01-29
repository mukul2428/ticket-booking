"use client";

import DisplayTicket from "@/app/seller/display-tickets/page";
import { login } from "@/app/state/userData/loginDataSlice";
import { signUp } from "@/app/state/userData/signUpDataSlice";
import { signUpInputs } from "@/app/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import SignUpForm from "@/app/ui/sign-up/signUpForm";
import { useRouter } from "next/navigation";

const BuyerInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signUpInputs>();

  const dispatch = useDispatch();

  const router = useRouter();
  const onSubmit: SubmitHandler<signUpInputs> = (data) => {
    dispatch(
      signUp({
        fname: data.fname,
        sname: data.sname,
        email: data.email,
        password: data.password,
        phoneNo: data.phoneNo,
        becomeMember: data.becomeMember,
        sendMail: data.sendMail,
        shareData: data.shareData,
        userType: "Seller",
      })
    );
    dispatch(
      login({
        email: data.email,
        password: data.password,
        rememberMe: "",
        userType: "Seller",
      })
    );
    router.push("/buyer/buyer-info/required-tickets");
  };
  return (
    <>
      <DisplayTicket />
      <div className="flex flex-col justify-center items-center m-10">
        <h3>If you are already a member, you can continue by logging in</h3>
        <div className="w-2/5">
          <button className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg w-full">
            Entrance
          </button>
          <div className="flex flex-row justify-center my-6">
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-32"></hr>
            <p className="text-sm my-1 mx-1 text-gray-300">Or</p>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-32"></hr>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SignUpForm register={register} errors={errors} />
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyerInfo;
