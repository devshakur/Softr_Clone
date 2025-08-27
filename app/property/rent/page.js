import Buy from "@/components/Buy";
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
            Rent Listed Property
          </h1>
        </div>
      </header>
      <div>
        <Buy title={"Pay for your Desired Home"} />
      </div>
    </div>
  );
};

export default page;
