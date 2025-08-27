"use client";
import React, { useState } from "react";
import PasswordCheck from "@/components/PasswordCheck";
import { useRouter } from "next/navigation";
import { useAuth } from "../context";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

const signup = () => {
  const { signUpNewUser, handleLinkedInLogin, handleGoogleSignIn } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);
  const [pswdType, setPswdType] = useState("password");
  const router = useRouter();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signUpNewUser({ email, password });
      if (error) {
        throw new Error("An Error Occured:", error);
      }
      toast.success("User Registration Successful");
      setTimeout(() => {
        router.push("/login");
      }, 300);
    } catch (error) {
      toast.error("failed to verify user");
      console.error(error.message);
    }
  };

  const SignInWithGoogle = () => {
    try {
      const { error } = handleGoogleSignIn();
      if (error) {
        throw new Error("An Error  Occurred:", error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const SignInWithLinkedln = () => {
    try {
      const { error } = handleLinkedInLogin();
      if (error) {
        throw new Error("An Error  Occurred:", error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const togglePswdVisibility = () => {
    setPswdType(pswdType === "password" ? "text" : "password");
  };
  return (
    <div className="w-[100vw] h-[100dvh] overflow-hidden  md:grid gap-3 md:grid-cols-2">
      <div className="w-[100%] max-w-md xl:max-w-lg md:relative left-1 lg:left-16 xl:left-32 h-full flex justify-center flex-col items-center xl:justify-start xl:mt-8">
        <Image
          src="/images/GidaConnect.png"
          alt="logo"
          height={120}
          width={120}
        />
        <h2 className="font-mono text-[25px]  text-[rgb(33, 37, 41)] font-inter mt-3 mb-8">
          Sign up on
          <span className="text-gray-500 ml-1 text-[20px]">GidaConnect</span>
        </h2>
        <form
          onSubmit={signUp}
          className="w-[100%] flex justify-center flex-col items-center gap-4"
        >
          <button
            onClick={SignInWithGoogle}
            className="w-[90%] cursor-pointer flex justify-center items-center  border text-sm border-gray-200 py-2 rounded-md text-gray-600"
          >
            <img
              src="/images/google.png"
              alt="google"
              style={{ width: "50px", height: "30px" }}
            />{" "}
            Sign up with Google
          </button>
          <button
            onClick={SignInWithLinkedln}
            className="w-[90%] cursor-pointer flex justify-center items-center gap-2 pl-4 border border-gray-200 rounded-md text-sm text-gray-600"
          >
            <img
              src="/images/linkedln_logo.png"
              alt="google"
              style={{ width: "50px", height: "50px" }}
            />{" "}
            sign up with (Linkedln)
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" w-[90%] bg-gray-50 outline-none text-gray-500  px-3 text-xs font-poppins  rounded-lg py-3 border border-gray-300"
          />
          {/* Input wrapper with relative positioning */}
          <div className="relative w-[90%]">
            <input
              type={pswdType}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="w-full bg-gray-50 outline-none text-gray-500 px-3 text-sm font-poppins rounded-lg py-3 border border-gray-300"
            />

            {/* Eye toggle positioned inside input field */}
            <span
              onClick={togglePswdVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {pswdType === "password" ? "👁️" : "🙈"}
            </span>
          </div>

          {/* Password checklist only visible on focus */}
          {focus && (
            <div className="mt-2 ml-2">
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
          <div className="mt-1">
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
      <ToastContainer />
    </div>
  );
};

export default signup;
("https://studio.softr.io/media/signup-pattern-GMY2PILV.svg");
