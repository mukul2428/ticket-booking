"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpInputs } from "../types";
import { useDispatch } from "react-redux";
import { signUp } from "../state/userData/signUpDataSlice";
import { login } from "../state/userData/loginDataSlice";
import SignUpForm from "@/app/ui/sign-up/signUpForm";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signUpInputs>();

  const dispatch = useDispatch();

  const router = useRouter();

  const onSubmit: SubmitHandler<signUpInputs> = async (data) => {
    try {
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
      const response = await axios.post("/api/users/signup", data);
      console.log(response);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpForm register={register} errors={errors} />
    </form>
  );
};

export default SignUp;
