import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
const Input = () => {
  return (
    <div className=" flex flex-row justify-center my-6">
      <div className=" flex flex-row-w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search the city...."
          className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:placeholder:lowercase
        "
        />
        <UilSearch
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-105 "
        />
        <UilLocationPoint
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-105 "
        />
      </div>
      <div className="flex flex-row items-center justify-center text-white pl-8 ">
        <button
          name="metric"
          className=" text-lg text-white font-light hover:scale-105  "
        >
          °C
        </button>
        <p className="mx-1 text-lg text-white"> | </p>
        <button
          name="imperial"
          className=" text-white font-light text-lg hover:scale-105 "
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
