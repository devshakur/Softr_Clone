import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
const DashboardNav = () => {
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
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <div className="hidden h-[60px] text-black shadow-lg  w-full fixed bg-white z-[999] top-0 left-0 sm:flex justify-between items-center px-16">
        <div>
          <img
            style={{ width: "6rem", height: "6rem" }}
            src="/images/softrlogo.png"
            alt="logo"
          />
        </div>
        <ul className="flex  text-md cursor-pointer">
          {Navlist.map((nav, index) => (
            <Link key={index} href={nav.href} className="nav p-3">
              {nav.name}
            </Link>
          ))}
        </ul>
      </div>
      {/*Mobile Navigation*/}
      <div className="sm:hidden h-[60px] bg-white z-[999] shadow-lg w-full  fixed top-0 left-0 flex justify-between items-center px-6">
        <div>
          <img
            style={{ width: "6rem", height: "6rem" }}
            src="/images/softrlogo.png"
            alt="logo"
          />
        </div>
        <button>
          <RiMenu3Line size={20} />
        </button>
      </div>
    </>
  );
};

export default DashboardNav;
