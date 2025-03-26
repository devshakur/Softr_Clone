"use client"

import  { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const images = [
    '/images/softr1.jpeg',
    '/images/softr1.jpeg'  
]
const Template = () => {
    const [index, setIndex] = useState(0)
  
    useEffect(()=>{
     const interval = setInterval(() => {
       setIndex((prevIndex)=>(prevIndex + 1) % images.length) 
     }, 5000);
    //   return clearInterval(interval)
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-3 sm:mt-15'>
                <h3 className='font-poppins text-[23px] sm:text-[32px] text-[0D121C] mb:3 font-semibold'>Template Gallery</h3>
                <div className="slide w-[95%] sm:w-[96%] h-[353px] mx-3 flex justify-center items-center mt-3 sm:mt-14 md:mt-14 overflow-hidden relative">
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
    )
}

export default Template
