"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <>
      <nav
        className={`px-5 sticky mx-2  h-[90px]  cursor-pointer top-0 left-0  z-50 transition-all duration-300 
            ${isScrolled ? "bg-white" : "bg-transparent"}`}
      >
        <div
          className={` flex justify-between items-center ${
            isScrolled ? "mt-4" : "mt-0"
          }`}
        >
          <div className="xl:ml-18">
            <Image
              src="/images/softrlogo.png"
              alt="logo"
              height={120}
              width={120}
            />
          </div>
          <ul className="hidden lg:flex gap-10 items-center mr-12 xl:mr-48">
            <li className="font-medium text-black flex gap-1 items-center">
              Products{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="bold"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="font-medium text-black flex gap-1 items-center">
              Solutions{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="bold"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li>Templates</li>
            <li className="font-medium text-black flex gap-1 items-center">
              Resources{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="bold"
                viewBox="0 0 24 24"
                strokeidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li>Pricing</li>
            <button>Sign In</button>
            <button className="px-5 py-2 bg-black rounded-md text-white">
              <a href="/signup"> Get started free</a>
            </button>
          </ul>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
