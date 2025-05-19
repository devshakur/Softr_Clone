import React from "react";

const MapComponent = ({ datas }) => {
  return (
    <div>
      <ul className="text-center mt-5 flex flex-col gap-5">
        {datas.map((data, index) => (
          <li
            className="room"
            style={{ fontWeight: "600", fontSize: "13px" }}
            key={index}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapComponent;
