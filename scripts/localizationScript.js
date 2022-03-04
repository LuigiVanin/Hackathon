let lat = 0
let long = 0

function GetLocal(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude
            long = position.coords.longitude
        });
    } else { 
        alert("Geolocation is not supported by this browser.");
    }

}

// GetLocal()