"use client";
import { loginInputs } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state/userData/loginDataSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LocationSvg } from "./svgIcons";
import { signUp } from "../state/userData/signUpDataSlice";
import axios from "axios";
import toast from "react-hot-toast";

interface LoginProps {
  setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setLoginVisible }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginInputs>();

  const onSubmit: SubmitHandler<loginInputs> = async (data) => {
    try {
      dispatch(
        login({
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe,
          userType: "Seller",
        })
      );
      dispatch(
        signUp({
          fname: "",
          sname: "",
          email: data.email,
          password: data.password,
          phoneNo: 0,
          becomeMember: false,
          sendMail: false,
          shareData: false,
          userType: "Seller",
        })
      );

      const response = await axios.post("/api/users/login", data);
      // console.log(response);
      toast.success("Login Successful");
      router.push("/");
      setLoginVisible(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.error || "Oops! Something went wrong");
    }
  };

  const router = useRouter();

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex-center"
        style={{ zIndex: 9999 }}
      >
        <div className="w-[400px]">
          <span
            onClick={() => setLoginVisible(false)}
            className="float-right mt-[-20px] mr-[-20px] bg-white cursor-pointer p-2 rounded-md"
          >
            <LocationSvg />
          </span>
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
                <p
                  onClick={() => {
                    setLoginVisible(false);
                    router.push("/sign-up");
                  }}
                  className="mt-1 ml-3 text-orange-600 underline text-xs cursor-pointer"
                >
                  New User?
                </p>
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
                <Image
                  className="mx-1 h-auto w-auto"
                  src="/facebook.png"
                  alt="facebook"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
                Facebook
              </button>
              <button className="login-icons">
                <Image
                  className="mx-1 h-auto w-auto"
                  src="/google.png"
                  alt="google"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
