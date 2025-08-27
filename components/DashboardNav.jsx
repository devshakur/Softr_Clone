"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import MobileNav from "./MobileNav";
import Image from "next/image";
const DashboardNav = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const BACK_to_DASHBOARD = ()=> {
    router.push('/dashboard')
  }

  const closeNav = ()=> {
    setOpen(false)
  }
 
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
    <>
      <div className="hidden h-[70px] text-black shadow-lg  w-full fixed bg-white z-[999] top-0 left-0 sm:flex justify-between items-center px-5">
        <button onClick={()=>BACK_to_DASHBOARD()}>
           <Image
          src="/images/GidaConnect.png"
          alt="logo"
          className="cursor-pointer"
          onClick={()=>router.push('/login')}
          height={120}
          width={120}
        />
        </button>
        <ul className="flex  text-md cursor-pointer">
          {Navlist.map((nav, index) => (
            <Link key={index} href={nav.href} className="nav p-3">
              {nav.name}
            </Link>
          ))}
        </ul>
      </div>
      {/*Mobile Navigation*/}
      <div className="sm:hidden h-[70px] bg-white z-[999] shadow-lg w-full  fixed top-0 left-0 flex justify-between items-center px-6">
        <div>
         <Image
          src="/images/GidaConnect.png"
          alt="logo"
           className="cursor-pointer"
          onClick={()=>router.push('/login')}
          height={120}
          width={120}
        />
        </div>
        <button onClick={()=>setOpen(!open)}>
          <RiMenu3Line size={20} />
        </button>
      </div>
      {open && <MobileNav closeNav={closeNav} /> }
    </>
  );
};

export default DashboardNav;
