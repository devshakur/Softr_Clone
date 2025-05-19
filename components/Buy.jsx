"use client";
import BuyersComp from "./BuyersComp";
import MapComponent from "./MapComponent";
import { useState } from "react";
import SliderCarol from "./Slider";

const Buy = () => {
  const Bedrooms = [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4 Bedrooms",
    "5+ Bedrooms",
  ];
  const States = ["Abuja", "Kaduna", "Kano", "Lagos", "PortHacourt"];
  const [search, setSearch] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] min-h-screen">
      {/* Filters */}
      <section className="md:mt-18 p-6 border-b lg:border-r border-gray-300">
        <h5 className="text-center font-medium text-gray-500 text-sm mb-3">
          Filter By Bedrooms
        </h5>
        <MapComponent datas={Bedrooms} />
        <h5 className="text-center font-medium text-gray-500 text-sm mt-5 mb-3">
          Filter By State
        </h5>
        <MapComponent datas={States} />
      </section>

      {/* Content */}
      <div className="grid grid-rows-[200px_auto] gap-4 p-4">
        {/* Banner */}
        <div className="relative w-full h-52 rounded-md overflow-hidden">
          <img
            src="/images/buyhome.jpg"
            alt="Buy Home Banner"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-2xl font-bold">
              Find Your Dream Home
            </h2>
          </div>
        </div>

        {/* Search + Properties */}
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or location..."
            className="w-[98%] mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <BuyersComp search={search} />
        </div>
      </div>
    </div>
  );
};

export default Buy;
