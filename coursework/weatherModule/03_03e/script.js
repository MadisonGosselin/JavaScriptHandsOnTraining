/**
 * Create a component to display weather data.
 * - Use the new component in the ./components folder
 * - Modify the fetch query to call the component.
 * - Convert the temperature to metric and fahrenheit
 */

import settings from "../settings.js";
import weatherCard from "./components/weathercard.js";

const mainContent = document.querySelector(".main-content");

async function displayData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=49.2194636514848&lon=-122.96519638087379&APPID=${settings.appid}`,
    {
      method: "GET",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      mainContent.innerHTML = weatherCard(data);
    });
}

displayData();
