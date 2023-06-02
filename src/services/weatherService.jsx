import { DateTime, Zone } from "luxon";

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

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (serarchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    serarchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclue: "current,minutely,alerts",
    units: serarchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// const formatToLocalTime =
//   (seces,
//   Zone,
//   (format = "'ccc, dd LLL yyyy' | Local time: 'hh:mm a' ") =>
//     DateTime.fromSeconds(seces).setZone(Zone).toFormat(format));

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
