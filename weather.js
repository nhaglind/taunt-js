// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let lat = 37.8267;
let long = -122.4233;
var time;
var summary;
var temp;

var data = JSON.stringify(true);
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;


xhr.open("GET", `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0438f38f75f663940dbe9993b52412f7/${lat},${long}`, false);
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

let json = JSON.parse(xhr.responseText);
time = (json.currently.time);
summary = (json.currently.summary);
temp = (json.currently.temperature);

console.log(time, summary, temp);

document.querySelector('.weather').innerHTML = temp;
