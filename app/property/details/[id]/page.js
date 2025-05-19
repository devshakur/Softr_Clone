"use client";

import { useParams } from "next/navigation";
import { RecentProperties } from "@/utils/data"; // adjust path as needed
import PropertyOwners from "@/components/PropertyOwners";

import { FaBed, FaToilet, FaCar } from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";
import { IoIosReturnLeft } from "react-icons/io";
import { useRouter } from "next/navigation";

const PropertyDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const property = RecentProperties.find((p) => p.property_id === id);

  const handleBack = () => router.back();

  if (!property) return <p className="p-6 text-red-600">Property not found</p>;

  return (
    <div className="h-[100dvh] w-full mt-18">
      <header className="p-3">
        <button
          onClick={handleBack}
          className="text-blue-600 mb-6 flex items-center cursor-pointer"
        >
          <IoIosReturnLeft className="mr-2" />
          Back to Property Listing
        </button>
        <h4 className="text-[30px] font-semibold">{property.property_name}</h4>
      </header>

      <main className="grid md:grid-cols-[1fr_500px] p-1 gap-5">
        <section className="bg-white  h-[550px] md:shadow-lg rounded-md p-6">
          <video
            poster={property.property_img}
            src="/videos/house-review.mp4"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            controls
            loop
            muted
            playsInline
          />
        </section>

        <article className="bg-white md:shadow-xl rounded-sm md:mx-6  p-6">
          <img
            src={property.property_img}
            alt={property.property_name}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <section className="p-2 flex justify-between">
            <button className="bg-purple-500 text-sm uppercase text-white px-6 py-1 rounded-3xl">
              {property.property_type}
            </button>
            <p className="text-2xl font-semibold">{property.property_price}</p>
          </section>
          <div className="w-full flex flex-col gap-3">
            <button className="p-3 border rounded-md text-lg font-medium border-blue-600 text-blue-600">
              Save
            </button>
            <button className="bg-blue-600 rounded-md p-3 text-lg font-medium text-white">
              Buy Now
            </button>
          </div>

          <div className="mt-3 p-3">
            <h4 className="text-2xl mb-2 font-semibold">Property Includes</h4>
            <div className="flex flex-col gap-3">
              {property.inner_details.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <span className="text-gray-200">•</span>
                  <p className="text-md font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>

      <PropertyOwners />
    </div>
  );
};

export default PropertyDetails;
