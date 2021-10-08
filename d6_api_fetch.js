//weather data using fetch
//https://api.wheretheiss.at/v1/satellites/25544 // for satellite location
//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key} // for weather data
import fetch from 'node-fetch' ;
let url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=74382af856f0d02d7f684c901b965614"
let response = fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));

/*if(response.ok){
    let json = await response.json();// if HTTP-status is 200-299
    // get the response body (the method explained below)
}
    else {
        alert("HTTP-Error: " + response.status);
}*/

