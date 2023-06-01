import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TeampureAndDetails = () => {
  return (
    <div>
      <div className=" flex items-center justify-center py-6 text-xl text-cyan-300 ">
        <p>Cloudy or Whatever </p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        {/* <img src={UilSun} alt="" /> */}
        <img
          src="http://openweathermap.org/img/wn/01d@2x/png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">*34</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">*32</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">50%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">30 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p>
          Rise: <span className=" font-light ">05:35AM</span>{" "}
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p>
          UilSunset: <span className=" font-light ">05:35AM</span>{" "}
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p>
          High: <span className=" font-light ">*40</span>{" "}
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p>
          Low: <span className=" font-light ">*40</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default TeampureAndDetails;
