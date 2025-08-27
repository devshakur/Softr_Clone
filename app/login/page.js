"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const login = () => {
  const { signInWithEmail, handleGoogleSignIn, handleLinkedInLogin } =
    useAuth();
  const [isFilled, setIsFilled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [value, setValue] = useState();

  const SignIn = (e) => {
    e.preventDefault();
    try {
      const { error } = signInWithEmail({ email, password });
      if (error) {
        throw new Error("An Error Occured:", error);
      }
      toast.success("Login Successful");
      setTimeout(() => {
        router.push("/dashboard");
      }, 300);
    } catch (error) {
      toast.error("failed to verify user details");
      console.log(error.message);
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

  return (
    <div className="w-[100vw] h-[100dvh] overflow-hidden  md:grid gap-3 md:grid-cols-2">
      <div className="w-[100%] max-w-md xl:max-w-lg md:relative left-1 lg:left-16 xl:left-32 h-full flex justify-center flex-col items-center xl:justify-start xl:mt-12">
        <Image
          src="/images/GidaConnect.png"
          alt="logo"
          height={120}
          width={120}
        />
        <h2 className="font-mono text-[25px] text-[rgb(33, 37, 41)] font-inter mt-3 mb-8">
          Sign in to{" "}
          <span className="text-gray-500 text-[20px]">GidaConnect</span>
        </h2>
        <div className="w-[100%] flex justify-center flex-col items-center gap-4">
          <button
            onClick={SignInWithGoogle}
            className="w-[90%] flex justify-center cursor-pointer items-center  border text-sm border-gray-200 py-2 rounded-md text-gray-600"
          >
            <img
              src="/images/google.png"
              alt="google"
              style={{ width: "50px", height: "30px" }}
            />{" "}
            Continue with Google
          </button>
          <button
            onClick={SignInWithLinkedln}
            className="w-[90%] flex cursor-ponter justify-center items-center gap-2 border border-gray-200 rounded-md text-sm text-gray-600"
          >
            <img
              src="/images/linkedln_logo.png"
              alt="google"
              style={{ width: "50px", height: "50px" }}
            />
            Continue with Linkedln
          </button>
        </div>
        <h4 className="font-bold my-4">OR</h4>
        <form
          onSubmit={SignIn}
          className="w-[100%] flex justify-center flex-col items-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className=" w-[90%] bg-gray-100 px-3 text-sm rounded-md py-3 border border-gray-300 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            // onBlur={!value ? setIsFilled(false) : setIsFilled(true)}
            className=" w-[90%] bg-gray-100 px-3 text-sm rounded-md py-3 border border-gray-300 focus:outline-none"
          />
          <div className="w-full flex justify-center mt-2">
            <button className="w-[90%] bg-black rounded-md text-xl py-3 text-white">
              <a> Sign In</a>
            </button>
          </div>
          <div>
            <a className="text-sm text-blue-400" href="/signup">
              Don't have an account
            </a>
          </div>
        </form>
      </div>
      <div className="hidden md:flex">
        <div className="h-[100dvh] w-[100dvw] ">
          <div className="bg-[url(/images/left.jpg)] bg-cover h-[98%] flex justify-center items-center">
            <img
              style={{
                width: "46%",
                height: "48%",
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

export default login;
