const API_KEY = 'UNCUHKPRUE8SL758WT53GXN2L';
const weatherResult = document.getElementById('weather-result');
document.querySelector('form').addEventListener('submit', async (event) => {
	event.preventDefault();
	// show spinner
	loading.style.display = 'block';
	weatherResult.innerHTML = '';
	const locationData = document.getElementById('location-data').value;

	try {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationData}/?key=${API_KEY}`
		);
		const data = await response.json();
		const weatherData = data.currentConditions.conditions;
		weatherResult.textContent = weatherData;
		console.log(weatherData);
	} catch (error) {
		weatherResult.textContent = 'Error, Check Internet Connection';
	} finally {
		loading.style.display = 'none';
	}
});

async function getWeatherData(params) {}
