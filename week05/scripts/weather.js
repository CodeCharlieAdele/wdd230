
const apiKey = 'appid=5049d7d05756009e205071be7eec0ca1';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY_NAME&appid=${apiKey}`;

    const weatherDiv = document.getElementById('weather');

    // Fetch weather data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extract relevant weather information
        const { name, weather, main } = data;
        const { description, icon } = weather[0];
        const { temp, humidity } = main;

        // Create HTML elements to display the weather information
        const cityName = document.createElement('h2');
        cityName.textContent = name;

        const weatherDesc = document.createElement('p');
        weatherDesc.textContent = description;

        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${temp} K`;

        const humidityInfo = document.createElement('p');
        humidityInfo.textContent = `Humidity: ${humidity}%`;

        // Create an icon element using Font Awesome
        const weatherIcon = document.createElement('i');
        weatherIcon.classList.add('fas', `fa-${icon}`);

        // Append the elements to the weatherDiv
        weatherDiv.appendChild(cityName);
        weatherDiv.appendChild(weatherDesc);
        weatherDiv.appendChild(weatherIcon);
        weatherDiv.appendChild(temperature);
        weatherDiv.appendChild(humidityInfo);
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
        weatherDiv.textContent = 'Failed to fetch weather data.';
      });







// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('#figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=5049d7d05756009e205071be7eec0ca1';

// async function apiFetch () {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.temperature}&deg;F`;
//     const iconSrc = `https://openwethermap.org/img/w/${data.weather.icon}.png`;
//     let desc = data.weather[0].description;
//     weatherIcon.setAttribute('____', _________);
//     weatherIcon.setAttribute('____', _________);
//     captionDesc.textContent = `${desc}`;
// }

// apiFetch();
// displayResults();