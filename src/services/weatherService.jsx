const API_KEY = "33560c5b40e089dd2380f44d2df70d61";
const Base_Url = "http://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoTeype, serarchParams) => {
  const url = new URL(Base_Url + "/" + infoTeype);
  url.search = new URLSearchParams({ ...serarchParams, appid: API_KEY });

  console.log(url);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main, deatils, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    deatils,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (serarchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    serarchParams
  ).then(formatCurrentWeather);
  return formattedCurrentWeather;
};

export default getFormattedWeatherData;
