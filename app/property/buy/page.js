import Buy from "@/components/Buy";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import React from "react";

const page = () => {
  return (
    <div className="mt-15">
      <header className="relative w-[99%]  h-[350px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/buyhome.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/25 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-[25px] font-bold italic">
            Buy Listed Property
          </h1>
        </div>
      </header>
      <section className="mt-10">
        <div className="w-[95%] mx-auto mt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Location or Keyword..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>
        </div>
      </section>
      <div>
        <Buy />
      </div>
    </div>
  );
};

export default page;
