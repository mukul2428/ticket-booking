"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpInputs } from "../types";
import { useDispatch } from "react-redux";
import { signUp } from "../state/userData/signUpDataSlice";
import { login } from "../state/userData/loginDataSlice";
import SignUpForm from "@/app/ui/sign-up/signUpForm";

const SignUp = () => {
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
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpForm register={register} errors={errors}/>
    </form>
  );
};

export default SignUp;
