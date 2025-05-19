"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/images/softr1.jpeg",
  "/images/home2.jpeg",
  "/images/softr1.jpeg",
  "/images/house-1.jpeg",
];
const Template = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    //   return clearInterval(interval)
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-3 sm:mt-15">
        <h3 className="font-poppins text-[23px] sm:text-[32px] mb-3 text-[0D121C] font-semibold">
          Template Gallery
        </h3>
        <div className="slide w-[95%] sm:w-[96%] h-auto bg-blue-700 mx-3 flex justify-center items-start overflow-x-clip relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute"
            >
              <Image
                src={images[index]}
                alt="property"
                className="rounded-xl"
                width={650}
                height={353}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Template;
