function getTemperature(lat, lon){
    const temperature = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=20bf296004bf9c226850010dd33186c8`);
    temperature.then(printTemperature);
}

function printTemperature(answer){
    console.log(answer.data.main.temp - (273.15).toFixed(3));

    const icon = answer.data.weather[0].icon;

    const putIcon = document.querySelector(".weather");
    putIcon.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    `;

    const cityName = answer.data.name;
}