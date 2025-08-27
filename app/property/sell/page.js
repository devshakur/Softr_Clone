"use client";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="mt-15 ">
      <header className="shape bg-gradient-to-r from-blue-200 to-white w-full flex flex-col items-center lg:flex-row lg:justify-between p-6">
        <div className="text-center lg:text-right lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">
            Place your Property on Sales
          </h1>
          <h4 className="text-indigo-950 text-2xl font-semibold">&</h4>
          <h3 className="text-lg font-semibold md:text-lg text-indigo-900 mt-2">
            Get Instant Buyers for Property
          </h3>
          <button
            onClick={openModal}
            className="p-3 bg-amber-600 text-white mt-4 rounded-md"
          >
            Sell Property
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/grass-home.png"
            alt="home"
            width={600}
            height={600}
            className="max-w-full h-auto"
          />
        </div>
      </header>
      <main className="mt-3">
        <h4 className="text-center font-bold text-2xl text-indigo-950">
          List Your Property
        </h4>
        <section className="p-6 flex justify-center">
          <div className="w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-start p-4 rounded-md  bg-white">
              <div className="w-full flex justify-center items-center">
                <h4 className="h-14 w-14 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                  <Image
                    src={"/icons/sell-icon.png"}
                    alt="home-icon"
                    width={46}
                    height={46}
                  />
                </h4>
              </div>
              <strong className="text-sm text-center mt-4 mb-1">
                Sell your Property to anyone in the world
              </strong>
              <p className="text-xs text-center text-gray-700">
                Unlock global opportunities and reach buyers from every corner
                of the globe. With today’s technology, location is no longer a
                limit—list your property online and attract international
                investors, expats, and homebuyers ready to purchase. Whether
                you're selling a home, land, or commercial space, expand your
                market and sell faster by going global!
              </p>
            </div>
            <div className="lg:mt-10 flex flex-col items-start p-4 rounded-md  bg-white">
              <div className="w-full flex justify-center items-center">
                <h4 className="h-14 w-14 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                  <Image
                    src={"/icons/property-icon.png"}
                    alt="home-icon"
                    width={46}
                    height={46}
                  />
                </h4>
              </div>
              <strong className="text-sm text-center mt-4 mb-1">
                Take Images and Videos of Property
              </strong>
              <p className="text-xs text-center text-gray-700">
                Multiple Layouts With Same Template - Autodesk Community 16 Aug
                2019. Adding multiple templates to a sheet set - Autodesk
                Community 16 Oct 2018.
              </p>
            </div>
            <div className="flex flex-col items-start p-4 rounded-md  bg-white">
              <div className="w-full flex justify-center items-center">
                <h4 className="h-14 w-14 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                  <Image
                    src="/icons/upload-icon.png"
                    alt="home"
                    width={46}
                    height={46}
                  />
                </h4>
              </div>
              <strong className="text-sm text-center mt-4 mb-1">
                Upload Your Property Here
              </strong>
              <p className="text-xs text-center text-gray-700">
                Multiple Layouts With Same Template - Autodesk Community 16 Aug
                2019. Adding multiple templates to a sheet set - Autodesk
                Community 16 Oct 2018.
              </p>
            </div>
            <div className="lg:mt-10 flex flex-col items-start p-4 rounded-md  bg-white">
              <div className="w-full flex justify-center items-center">
                <h4 className="h-14 w-14 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                  <Image
                    src="/icons/buyer-icon.png"
                    alt="home"
                    width={42}
                    height={42}
                  />
                </h4>
              </div>
              <strong className="text-sm text-center mt-4 mb-1">
                Get Buyers Instantly
              </strong>
              <p className="text-xs text-center text-gray-700">
                Multiple Layouts With Same Template - Autodesk Community 16 Aug
                2019. Adding multiple templates to a sheet set - Autodesk
                Community 16 Oct 2018.
              </p>
            </div>
          </div>
        </section>
      </main>
      {isOpen && (
        <Modal openModal={openModal} closeModal={closeModal} isOpen={isOpen} />
      )}
    </div>
  );
};

export default page;
