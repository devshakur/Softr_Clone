"use-client";
import React from "react";

const page = () => {
  return (
    <div className="h-full grid md:grid-cols-2">
      <div className="">
        <header className="lg:hidden relative bg-[url('/images/bycicle-boy.jpg')] bg-cover bg-no-repeat h-[500px] object-center w-full"></header>
        <section className="w-full flex justify-center items-center">
          <div className="w-[80%] lg:w-[40%] bg-white absolute z-10 bottom-2 rounded-xl lg:bottom-36 shadow-2xl lg:rounded-xl  h-[370px] lg:h-[340px]">
            <h3 className="text-center text-lg py-3 font-medium">
              GET IN TOUCH!
              <form className="w-[100%] flex justify-center flex-col items-center mt-8 gap-4">
                <div className="flex flex-col w-full items-center justify-center gap-4 lg:flex-row lg:w-[96%]">
                  <input
                    type="text"
                    placeholder="name"
                    className=" w-[90%] text-gray-600 bg-gray-100 px-3 text-sm rounded-md py-3 border border-gray-300 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className=" w-[90%] text-gray-600 bg-gray-100 px-3 text-sm rounded-md py-3 border border-gray-300 focus:outline-none"
                  />
                </div>
                <textarea
                  className="bg-gray-100 lg:hidden text-sm text-gray-600 font-normal rounded-md border border-gray-300 focus:outline-none px-2 py-2"
                  cols={42}
                  rows={4}
                  placeholder="Enter your complaint here"
                ></textarea>
                <textarea
                  className="bg-gray-100 hidden lg:block text-sm text-gray-600 font-normal rounded-md border border-gray-300 focus:outline-none px-2 py-2"
                  cols={78}
                  rows={6}
                  placeholder="Enter your complaint here"
                ></textarea>
                <div className="w-full lg:flex justify-end lg:px-4">
                  {" "}
                  <button className="bg-blue-700 py-2.5 px-3 text-sm text-white rounded-md">
                    Send Complaint
                  </button>
                </div>
              </form>
            </h3>
          </div>
        </section>
      </div>
      <div className="hidden md:flex  md:justify-start md:items-center h-[100dvh] w-full">
        <header className="h-[100%] flex items-center ">
          <img src="/images/bycicle_boy-2.png" width={700} height={300} />
        </header>
      </div>
    </div>
  );
};

export default page;
