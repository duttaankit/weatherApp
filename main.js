//JavaScript Document

var chk = document.querySelector('#temp').innerText;

var sea = document.querySelector('#sea');

if (chk === '') {
  sea.style.display = "block";
}




/*
var weather = {
 apiKey : '8d52cfb2ece9f91f142ad3c92a41a4de',
 fetchWeather : (city) => {
  fetch(`api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`).then((response) => {
   response.json();
  }).then((data) => {
   alert(data.weather[0].description);
  });
 }
};

weather.fetchWeather('london');*/

/*fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=london&appid=8d52cfb2ece9f91f142ad3c92a41a4de').then( (res) => {
 res.json();
}).then( (data) => {
});
*/