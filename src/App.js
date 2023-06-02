import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TeampureAndDetails from "./components/TeampureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", {
      q: "Manikgonj",
    });
    console.log(data);
  };
  fetchWeather();
  return (
    <div className=" mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
      <TopButtons />
      <Input />
      <TimeAndLocation />
      <TeampureAndDetails />
      <Forecast title={"hourly Forecast"} />{" "}
      <Forecast title={"Daily Forecast"} />{" "}
    </div>
  );
}

export default App;
