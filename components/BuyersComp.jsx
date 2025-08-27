"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RecentProperties } from "@/utils/data";
import { usePathname, useRouter } from "next/navigation";


const ITEMS_PER_PAGE = 4;

const BuyersComp = ({ search }) => {
  const router = useRouter();
  const location = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState('rent')

  const handlePropertyDetails = (id) => {
    router.push(`/property/details/${id}`);
  };

  // Filter based on name or location
  const filtered = RecentProperties.filter((property) => {
    const q = search.toLowerCase();
    return (
      property.property_name.toLowerCase().includes(q) ||
      property.property_location.toLowerCase().includes(q)
    );
  });
   
useEffect(()=>{
  location.includes('rent') ? setType('rent') : setType('sell')
},[location])
    // Filter based on property type rent or sell
    const filteredProperty = RecentProperties.filter((property) => {
      return (
        property.property_type.includes(type)
      );
    });



  // Pagination Logic
  const totalPages = Math.ceil(filteredProperty.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredProperty.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((property) => (
            <div
              key={property.property_id}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={property.property_img}
                  alt={property.property_name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {property.property_name}
                  </h3>
                  <span className="bg-purple-500 text-xs text-white px-3 py-1 rounded-full">
                    {property.property_type}
                  </span>
                </div>
                <p className="text-sm italic text-gray-600 mb-2">
                  {property.property_location}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 border-t border-dotted border-purple-300 pt-2">
                  {property.inner_details.map((inner, i) => (
                    <span key={i}>{inner}</span>
                  ))}
                </div>
                <div className="border-t mt-3 pt-2 flex justify-between text-sm text-orange-500">
                  <span className="font-semibold">
                    {property.property_price}
                  </span>
                  <button
                    onClick={() => handlePropertyDetails(property.property_id)}
                    className="text-blue-600 hover:underline text-xs"
                  >
                    Read More ➡️
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No properties match your search.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {filtered.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center items-center gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyersComp;
