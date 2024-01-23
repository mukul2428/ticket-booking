"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import _debounce from "lodash/debounce";
import Login from "./login";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../state/userData/loginDataSlice";
import { RootState } from "../state/store";
import { clearSignUp, signUp } from "../state/userData/signUpDataSlice";

const Header = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const dispatch = useDispatch();

  const userLoginData = useSelector((state: RootState) => state.login);
  const userSignUpData = useSelector((state: RootState) => state.signup);
  let links = [
    {
      id: 1,
      name: userLoginData.email || userSignUpData.email ? "Logout" : "Login",
      href: "",
      disabled: false,
    },
    {
      id: 2,
      name: "Help",
      href: "",
      disabled: false,
    },
    {
      id: 3,
      name: "Sell Tickets",
      href: "/seller/sell-tickets",
      disabled:
        userLoginData.userType === "Buyer" || userSignUpData.userType === "Buyer"
          ? true
          : false,
    },
  ];
  const eventNames = [
    { name: "Football", href: "" },
    { name: "BasketBall", href: "" },
    { name: "Concerts", href: "" },
    { name: "Events", href: "" },
  ];

  const handleToggle = () => {
    const userType = userLoginData.userType === "Seller" ? "Buyer" : "Seller";
    dispatch(login({ ...userLoginData, userType: userType }));
    dispatch(signUp({ ...userSignUpData, userType: userType }));
  };

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = _debounce(() => {
      const scrolled = window.scrollY;
      // Set the condition based on your scroll position
      setIsAtTop(scrolled === 0);
    }, 500); // Adjust the debounce delay as needed (in milliseconds)
    // Attach the debounced scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAtTop]);

  const pathname = usePathname();

  const handleLogin = (linkName: string) => {
    if (linkName === "Login") {
      setLoginVisible(!isLoginVisible);
    } else if (linkName === "Logout") {
      dispatch(logout());
      dispatch(clearSignUp());
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 ${
          isAtTop && pathname === "/" ? "bg-tranparent" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="h-20 w-auto"
              src="/siteLogo.png"
              alt="Logo"
              width="0"
              height="0"
              sizes="100vw"
            />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap ${
                isAtTop && pathname === "/" ? "text-white" : "text-black"
              }`}
            >
              E V E N T
            </span>
          </Link>
          <div className="items-center flex" id="navbar-cta">
            <ul className="flex gap-4 flex-row font-medium p-4 ">
              {eventNames.map((link) => (
                <Link key={link.name} href={link.href}>
                  <li
                    className={`block bg-transparent py-2 px-2 rounded ${
                      isAtTop && pathname === "/" ? "text-white" : "text-black"
                    }`}
                  >
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex gap-5">
            {links.map((link) =>
              !link.disabled ? (
                <Link key={link.id} href={link.href}>
                  <button
                    disabled={link.disabled}
                    type="button"
                    onClick={() => handleLogin(link.name)}
                    className={`font-medium rounded-lg text-sm px-4 py-2 text-center ${
                      isAtTop && pathname === "/"
                        ? "text-white bg-transparent hover:bg-white hover:text-black border border-white "
                        : "text-black bg-white hover:bg-black hover:text-white border border-black"
                    }`}
                  >
                    {link.name}
                  </button>
                </Link>
              ) : null
            )}
            <button
              className={`w-24 h-10 flex items-center justify-center ${
                userLoginData.userType === "Buyer" ||
                userSignUpData.userType === "Buyer"
                  ? "bg-orange-500"
                  : "bg-green-500"
              } text-white rounded-lg focus:outline-none`}
              onClick={handleToggle}
            >
              {userLoginData.userType}
            </button>
          </div>
        </div>
      </nav>
      {isLoginVisible && <Login setLoginVisible={setLoginVisible} />}
    </>
  );
};

export default Header;
