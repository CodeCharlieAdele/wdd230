
const weatherCard = document.querySelector('.weather-card');
if (weatherCard) {
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
let captionDesc = document.querySelector('figcaption');

	const url = 'https://api.openweathermap.org/data/2.5/weather?lat=36.59&lon=-83.66&appid=5049d7d05756009e205071be7eec0ca1&units=imperial';
	async function apiFetch(url) {
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				// console.log(data);
				displayResults(data);
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
		weatherIcon.setAttribute('src', iconsrc);
		weatherIcon.setAttribute('alt', desc);
		weatherIcon.setAttribute('width', '50px')
		captionDesc.textContent = `${desc}`;
	}
}

apiFetch(url);