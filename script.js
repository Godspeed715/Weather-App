const API_KEY = 'UNCUHKPRUE8SL758WT53GXN2L'
const locationData = document.getElementById('location-data')

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Port Harcourt/?key=${API_KEY}`)
    const data = await response.json()
    const weatherData = data.currentConditions.conditions
    console.log(weatherData)

})

async function getWeatherData(params) {

}
