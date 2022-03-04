function getTemperature(lat, lon) {
    const temperature = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=20bf296004bf9c226850010dd33186c8`
    );
    temperature.then(printInfo);
}

function printInfo(answer) {
    const temperature = (answer.data.main.temp - 273.15).toFixed(1);

    const icon = answer.data.weather[0].icon;
    const cityName = answer.data.name;
    const countryName = answer.data.sys.country;

    const putIcon = document.querySelector(".weather");

    putIcon.innerHTML = `
    <div class="image">
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    
    
    </div>
    <div class='info'>
        <h1>${temperature}°C</h1>
        <p>${cityName}</p>
    </div>
    <p>${cityName}, ${countryName}</p>
    `;
}
