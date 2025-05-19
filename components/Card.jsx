"use client";

import Image from "next/image";
import { RecentProperties } from "@/utils/data";
import SliderCarol from "./Slider";
import { useRouter } from "next/navigation";
const PropertyListings = () => {
  const router = useRouter();

  const handlePropertyDetalis = (id) => {
    router.push(`/property/details/${id}`);
  };
  return (
    <div className=" p-4">
      <SliderCarol>
        {RecentProperties.map((property, index) => (
          <div className="sm:px-4">
            <div
              key={index}
              className="w-auto bg-white rounded-br-4xl shadow-md overflow-hidden transition hover:shadow-lg"
            >
              {/* Property Image */}
              <div className="w-full h-64">
                <Image
                  src={property.property_img}
                  width={320}
                  height={256}
                  alt={property.property_name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Property Info */}
              <div className="p-4 bg-gray-50">
                {/* Title and Type Badge */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-gray-800">
                    {property.property_name}
                  </h3>
                  <button className="bg-purple-500 text-sm uppercase text-white px-4 py-1 rounded-bl-full">
                    {property.property_type}
                  </button>
                </div>

                {/* Location */}
                <p className="text-gray-600 text-sm mb-2 italic">
                  {property.property_location}
                </p>

                {/* Property Details */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 border-t border-dotted border-purple-300 pt-3">
                  {property.inner_details.map((inner, i) => (
                    <span key={i}>{inner}</span>
                  ))}
                </div>

                {/* Price & Link */}
                <div className="border-t my-3 border-dotted border-purple-200 flex p-1 justify-between items-center">
                  <span className="text-sm font-semibold text-orange-500">
                    {property.property_price}
                  </span>
                  <button
                    onClick={() => handlePropertyDetalis(property.property_id)}
                    className="text-[12px] font-medium cursor-pointer text-blue-600 hover:underline"
                  >
                    Read More ➡️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SliderCarol>
    </div>
  );
};

export default PropertyListings;
