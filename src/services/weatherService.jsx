const API_KEY = "33560c5b40e089dd2380f44d2df70d61";
const Base_Url = "http://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoTeype, serarchParams) => {
  const url = new URL(Base_Url + "/" + infoTeype);
  url.search = new URLSearchParams({ ...serarchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;
