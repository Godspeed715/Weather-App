const API_KEY = 'UNCUHKPRUE8SL758WT53GXN2L'


document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const locationData = document.getElementById('location-data').value;
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationData}/?key=${API_KEY}`)
    const data = await response.json()
    const weatherData = data.currentConditions.conditions
    console.log(weatherData)
    document.getElementsByTagName('div')[0].textContent=weatherData
})

async function getWeatherData(params) {

}
