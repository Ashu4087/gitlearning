//weather jsObject using fetch
//https://api.wheretheiss.at/v1/satellites/25544 // for satellite location
//http://api.openweathermap.org/jsObject/2.5/forecast?id=524901&appid={API key} // for weather jsObject



import fetch from 'node-fetch';


let url_local = "./d7_fetch_data.json" ; 
let url_remote = "http://api.openweathermap.org/jsObject/2.5/forecast?id=524901&appid=74382af856f0d02d7f684c901b965614"

fetch(url_remote)
        .then((response) => response.json())
        .then((jsObject) => console.log(jsObject));

/*
let response = fetch(url_local)
                .then((response)=> response.json())
                .then((jsObject) => jsObject);
                */
