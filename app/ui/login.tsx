"use client";

import { useEffect } from "react";
import { loginInputs } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { login } from "../state/userData/userDataSlice";
import { loginNotClick } from "../state/userData/loginClickedSlice";
import Link from "next/link";

const Login = () => {
  const userData = useSelector((state: RootState) => state.user);
  const loginClicked = useSelector((state: RootState) => state.loginClicked);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginInputs>();

  const onSubmit: SubmitHandler<loginInputs> = (data) => {
    console.log(data);
    dispatch(
      login({
        loggedIn: true,
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      })
    );
    dispatch(loginNotClick());
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return loginClicked ? (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex-center">
        <div className="w-[400px]">
          <div className="bg-white rounded-md p-6">
            <h1 className="text-lg font-bold">Log In</h1>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label className="text-sm font-bold mt-2">Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="common-input"
                placeholder="Your email address"
                type="text"
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  Email ID is required
                </span>
              )}
              <label className="text-sm font-bold mt-4">Password</label>
              <input
                {...register("password", {
                  required: true,
                })}
                className="common-input"
                placeholder="Your Password"
                type="password"
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  Password is required
                </span>
              )}
              <div className="flex flex-row mt-4">
                <input type="checkbox" {...register("rememberMe")} />
                <label className="text-sm mx-2 text-gray-400">
                  Remember me
                </label>
                <Link href={"/sign-up"}>
                  <p className="mt-1 mx-10 text-orange-600 underline text-xs">
                    New User?
                  </p>
                </Link>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold py-2 px-4 rounded-lg"
              >
                Log In
              </button>
            </form>
            <div className="flex flex-row">
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-32"></hr>
              <p className="text-sm my-1 mx-1 text-gray-300">Or log in with</p>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-32"></hr>
            </div>
            <div className="flex flex-row">
              <button className="login-icons">
                <img className="mx-1" src="/facebook.png"></img>Facebook
              </button>
              <button className="login-icons">
                <img className="mx-1" src="/google.png"></img>Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Login;
