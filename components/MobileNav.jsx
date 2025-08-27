import Link from 'next/link'
import React from 'react'

const MobileNav = ({closeNav}) => {
  const Navlist = [
    {
      name: "Buy",
      href: "/property/buy",
    },
    {
      name: "Sell",
      href: "/property/sell",
    },
    {
      name: "Rent",
      href: "/property/rent",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <div className='bg-white absolute left-0 top-0 h-full  w-full z-[999] text-green-500 p-3'>
      <div className='flex justify-end'>
        <span onClick={closeNav} className='text-xl cursor-pointer text-red-600'>X</span>
      </div>
      <ul className='h-full flex justify-center flex-col gap-6 items-center'>
        {Navlist.map((nav, index)=>(
          <Link onClick={closeNav} key={index} href={nav.href}>{nav.name}</Link>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav