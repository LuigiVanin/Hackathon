let lat = 0
let long = 0

let buttonGetLocation = document.querySelector(".loc")
let buttonSubmitLocalization = document.querySelector(".search")

buttonGetLocation.addEventListener("click", getLocal)
buttonSubmitLocalization.addEventListener("click", submitGeo)

function getLocal(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude
            long = position.coords.longitude
            fillInputs()
        });
    } else { 
        alert("Geolocation is not supported by this browser.");
    }

}

function fillInputs(){

    let inputs = [...document.querySelectorAll("input")]

    inputs[0].value = lat
    inputs[1].value = long
}

function submitGeo(){
    
    let inputs = [...document.querySelectorAll("input")]

    lat = inputs[0].value
    long = inputs[1].value

    getTemperature(lat, long)
}

getLocal()