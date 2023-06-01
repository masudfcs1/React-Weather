import React from "react";
import styles from "../../src/index.css";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Manikgonj",
    },
    {
      id: 2,
      title: "Dhaka",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "Mumbai",
    },
    {
      id: 5,
      title: "tokoy",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button className=" text-white text-lg font-medium">
          {" "}
          {city.title}{" "}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
