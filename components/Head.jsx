import React from "react";
import Image from "next/image";
const Head = () => {
  const BtnStyle =
    "border border-[#e4e4e9] bg-gray-100 p-2 rounded-md text-[12px] text-black";
  return (
    <div className="mt-6 flex md:items-center md:justify-center pt-[30px]">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-center md:items-start flex-col md:ml-18">
          <h3 className="text-[35px] md:text-[31px] text-center font-poppins font-semibold">
            Property Listing Template
          </h3>
          <div className="flex mt-6 gap-3">
            <button className={BtnStyle}>Marketplace</button>
            <button className={BtnStyle}>Real Estate</button>
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-center md:text-start text-[#212529]">
              Build a property listing powered with Airtable data to showcase
              all types of real estate.
            </p>
          </div>
          <div className="flex mt-8 gap-3">
            <button className=" bg-[#FFB30B] px-4 py-2 rounded-md text-sm font-semibold text-[#2A182E]">
              Use template
            </button>
            <button
              className={`${BtnStyle} bg-gray-200 text-md font-semibold text-[#2A182E] px-8`}
            >
              preview
            </button>
          </div>
        </div>
        <div className="w-[95%] sm:w-[96%] h-[353px] mx-3  flex justify-center items-center mt-3 sm:mt-16 md:mt-5 ">
          <Image
            src="/images/softr1.jpeg"
            alt="property"
            className="rounded-xl"
            width={650}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
