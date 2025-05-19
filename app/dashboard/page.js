import Card from "@/components/Card";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
const dashboard = () => {
  const heads = ["Bedroom", "Bathroom", "Kitchen"];
  const contents = [
    {
      icon: "🛌",
      text: "3",
    },
    {
      icon: "🚽",
      text: "4",
    },
    {
      icon: "🍽️",
      text: "1",
    },
  ];
  return (
    <div className="h-[100dvh] w-full">
      <div className="flex justify-center mt-28 md:mt-16">
        <header className="md:w-[100%] rounded-2xl md:bg-blue-50  flex flex-col  md:flex-row  text-black justify-start items-center">
          <div className="w-[100%] flex flex-col  items-center md:items-start md:ml-16">
            <h2 className="text-[2.4rem] text-purple-900 text-start leading-12 font-bold">
              Find The Property <br />
              <span className="text-start">For Rent or Sale</span>
            </h2>
            <p className=" text-center md:text-start text-gray-600 text-[16px] font-medium w-[70%] mt-3">
              We Provide a complete service for the purchase, sale and rental of
              Real Estate Property list luxury homes for sale across Nigeria
              from East to West
            </p>
            <div className="mt-6">
              <button className="bg-black text-white px-6 font-medium py-2 text-lg rounded-md">
                View Properties
              </button>
            </div>
          </div>
          <div
            className="w-full h-[400px]  bg-cover bg-center flex justify-end items-center"
            style={{ backgroundImage: "url('/images/home0.png')" }}
          >
            <div className="hidden md:block w-[350px]  bg-orange-50 shadow-2xl rounded-md p-4">
              <h3 className=" font-medium">Bungalow in Kubwa Phase 4 Abuja</h3>
              <h5 className=" text-gray-400 font-normal mt-2">
                Obasanjo lane, phase 4, Abuja
              </h5>
              <ul className="flex gap-4 mt-3">
                {heads.map((head, index) => (
                  <li key={index} className="font-medium">
                    {head}
                  </li>
                ))}
              </ul>
              <ul className="flex w-[70%] justify-between -mt-1">
                {contents.map((content, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[13px] justify-center"
                  >
                    <span className="text-[18px]">{content.icon}</span>
                    {content.text}{" "}
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <h4 className="text-sm font-medium">For Sale</h4>
                <p className="font-medium text-md text-orange-400">$500,000</p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className="flex justify-center flex-col items-center mt-8">
        <h5 className="text-purple-800 text-[14px] font-semibold">Recent </h5>
        <h3 className="text-4xl -mt-2 font-medium">Properties</h3>
        <h6 className="text-[14px] mt-2 text-gray-500 ">
          check out some of our latest Properties
        </h6>
      </section>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default dashboard;
