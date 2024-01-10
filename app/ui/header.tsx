"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import _debounce from "lodash/debounce";
import Login from "./login";
import Image from "next/image";

const Header = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const links = [
    { id: 1, name: "LogIn", href: "" },
    {
      id: 2,
      name: "Help",
      href: "",
    },
    { id: 3, name: "Sell Tickets", href: "/sell-tickets" },
  ];
  const eventNames = [
    { name: "Football", href: "" },
    { name: "BasketBall", href: "" },
    { name: "Concerts", href: "" },
    { name: "Events", href: "" },
  ];

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

  return (
    <>
      <nav className={`sticky top-0 z-50 ${isAtTop ? "bg-black" : "bg-white"}`}>
        <div className="flex items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="h-8 w-auto"
              src="/siteLogo.png"
              alt="Logo"
              width="0"
              height="0"
              sizes="100vw"
            />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap ${
                isAtTop ? "text-white" : "text-black"
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
                      isAtTop ? "text-white" : "text-black"
                    }`}
                  >
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex gap-5">
            {links.map((link) => (
              <Link key={link.id} href={link.href}>
                <button
                  type="button"
                  onClick={() =>
                    link.name === "LogIn" && setLoginVisible(!isLoginVisible)
                  }
                  className={`font-medium rounded-lg text-sm px-4 py-2 text-center ${
                    isAtTop
                      ? "text-white bg-black hover:bg-white hover:text-black border border-white "
                      : "text-black bg-white hover:bg-black hover:text-white border border-black"
                  }`}
                >
                  {link.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {isLoginVisible && (
        <Login
          setLoginVisible={setLoginVisible}
          isLoginVisible={isLoginVisible}
        />
      )}
    </>
  );
};

export default Header;
