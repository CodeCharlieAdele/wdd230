
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
let captionDesc = document.querySelector('figcaption');
let showForcast = document.querySelector('#forcast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=36.59&lon=-83.66&appid=5049d7d05756009e205071be7eec0ca1&units=imperial';
const forcast = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.59&lon=83.66&appid=5049d7d05756009e205071be7eec0ca1&units=imperial';

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.log(error);
    console.log("There is an error fetching weather data.")
  }
}

async function weatherForecast(forecast) {
	try {
		const response = await fetch(forecast);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			// displayResults(data)
		} else {
			throw new Error("API request failed");
		}
	} catch (error) {
		console.log(error);
		console.log("There is an error fetching weather data.")
	}
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let forcast = data.weather[0].forcast;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
  showForcast.textContent = `${forcast}`;

}

apiFetch(url);
weatherForecast();