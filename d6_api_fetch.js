//weather data using fetch

let url = "https://api.wheretheiss.at/v1/satellites/25544"
let response = fetch(url);
if(response.ok){
    let json = response.json();// if HTTP-status is 200-299
    // get the response body (the method explained below)
}
    else {
        alert("HTTP-Error: " + response.status);
}

