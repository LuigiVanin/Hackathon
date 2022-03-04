let lat = 0
let long = 0

let buttonGetLocation = document.querySelector(".loc")

buttonGetLocation.addEventListener("click", getLocal)

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

getLocal()