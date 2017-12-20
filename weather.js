var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let lat = 37.8267;
let long = -122.4233;
var currently;
var time;
var summary;
var temp;

var data = JSON.stringify(true);
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("load", weather);
xhr.open("GET", `https://api.darksky.net/forecast/0438f38f75f663940dbe9993b52412f7/${lat},${long}`);
xhr.setRequestHeader("content-type", "application/json");
xhr.send(data);


function weather() {
  var json = (JSON.parse(this.responseText));
  var time = json.currently.time;
  console.log(time);
}

console.log(weather());
