"use client";
import React, { useState } from "react";
import PasswordCheck from "@/components/PasswordCheck";

const signup = () => {
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState(false);
  const [pswdType, setPswdType] = useState("password");

  const tooglePswdVisibility = () => {
    if (pswdType === "password") {
      setPswdType("text");
    } else {
      setPswdType("password");
    }
  };
  return (
    <div className="w-[100vw] h-[100dvh] overflow-hidden  md:grid gap-3 md:grid-cols-2">
      <div className="w-[100%] max-w-md xl:max-w-lg md:relative left-1 lg:left-16 xl:left-32 h-full flex justify-center flex-col items-center xl:justify-start xl:mt-8">
        <img
          src="/images/softrlogo.png"
          style={{ width: "9rem", height: "9rem" }}
          alt="logo"
        />
        <h2 className="font-mono text-[25px] text-[rgb(33, 37, 41)] font-inter mt-3 mb-8">
          Sign up to start building
        </h2>
        <form className="w-[100%] flex justify-center flex-col items-center gap-4">
          <button className="w-[90%] flex justify-center items-center  border text-sm border-gray-200 py-2 rounded-md text-gray-600">
            <img
              src="/images/google.png"
              alt="google"
              style={{ width: "50px", height: "30px" }}
            />{" "}
            Sign up with Google
          </button>
          <button className="w-[90%] flex justify-center items-center gap-2 border border-gray-200 py-2 rounded-md text-md text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>{" "}
            Single sign on (SSO)
          </button>
          <h4 className="font-semibold">OR</h4>
          <input
            type="text"
            placeholder="Full Name"
            required
            className=" w-[90%] bg-gray-50 text-gray-500 outline-none px-3 text-xs font-poppins rounded-lg py-3 border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className=" w-[90%] bg-gray-50 outline-none text-gray-500  px-3 text-xs font-poppins  rounded-lg py-3 border border-gray-300"
          />
          <input
            type={pswdType}
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            className=" w-[90%] bg-gray-50 outline-none text-gray-500  px-3 text-xs font-poppins  rounded-lg py-3 border border-gray-300"
          />
          <span
            onClick={() => {
              tooglePswdVisibility();
            }}
            className="relative cursor-pointer -top-12  w-[75%] ml-10 flex justify-end"
          >
            👁️
          </span>

          {focus && (
            <div className="-mt-12 w-full ml-10">
              <PasswordCheck password={password} />
            </div>
          )}

          <div className="w-full ml-10 flex items-center">
            <input
              type="checkbox"
              style={{
                width: "23.6px",
                height: "23.6px",
                border: "1px solid grey",
                outline: "none",
                borderRadius: "25%",
                marginRight: "6px",
              }}
            />
            <span className="font-poppins">
              i accept the <a className="text-blue-700">terms and condition</a>
            </span>
          </div>
          <div className="w-full flex justify-center mt-2">
            <button className="w-[90%] bg-black rounded-md text-lg py-3 text-white">
              Sign up for free
            </button>
          </div>
          <div className="mt-5">
            <span className="mr-1 mb-5"> Already have an account?</span>
            <a className="text-sm text-blue-400" href="/login">
              Sign In
            </a>
          </div>
        </form>
      </div>
      <div className="hidden md:flex">
        <div className="h-[100dvh] w-[100dvw] ">
          <div className="bg-[url(/images/left.jpg)] bg-cover h-[98%] flex justify-center items-center">
            <img
              style={{
                width: "440px",
                height: "",
                marginTop: "2rem",
                borderRadius: "40px",
              }}
              src="/images/data.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
("https://studio.softr.io/media/signup-pattern-GMY2PILV.svg");
