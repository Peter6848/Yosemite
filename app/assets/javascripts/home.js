$(document).ready(function(){
  yosemiteWeatherAPI();
})

// GEO LOCATION WEATHER API
//**********************************************************
// var weatherAPI = function(){
//   var long;
//   var lat;
//   var tempFar;
//   var api;
//
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=fcde608bb653b40f860049b6be7f3666';
//       $.getJSON(api, function(data){
//         var weatherType = data.weather[0].description;
//         var kelvin = data.main.temp;
//         var windSpeed = data.wind.speed;
//         var city = data.name;
//         var tempFar = Math.floor((kelvin)*(9/5)-459.67);
//         var tempCel = Math.floor(kelvin - 273);
//         $('#city').text('City: ' + city);
//         $('#weather-type').text('Looks like: ' + weatherType);
//         if(tempFar < 65) {
//           $('#temperature').text('Temperature: ' + tempFar + '°F or ' + tempCel + '°C')
//           $('.weather-data').prepend("<img src='/assets/cold_weather.jpg' />");
//         } else {
//           $('#temperature').text('Temperature: ' + tempFar + '°F or ' + tempCel + '°C')
//           $('.weather-data').prepend("<img src='cold_weather.jpg' />");
//         }
//         $('#wind').text('Wind speed: ' + windSpeed + 'mph');
//       });
//     })
//   }
// }

var yosemiteWeatherAPI = function(){
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat=37.865101&lon=-119.538330&appid=fcde608bb653b40f860049b6be7f3666';
    $.getJSON(api, function(data){
      var weatherType = data.weather[0].description;
      var kelvin = data.main.temp;
      var windSpeed = data.wind.speed;
      var city = data.name;
      var tempFar = Math.floor((kelvin)*(9/5)-459.67);
      var tempCel = Math.floor(kelvin - 273);
      $('#weather-type').text(weatherType);
      $('#wind').text('Wind speed of ' + windSpeed + 'mph');

      if(tempFar < 65) {
        $('#temperature').text('Temperature of ' + tempFar + '°F or ' + tempCel + '°C')
      } else {
        $('#temperature').text('Temperature of ' + tempFar + '°F or ' + tempCel + '°C')
      }

      switch(weatherType) {
        case 'clear sky':
          $('.weather-data').append("<i class='wi wi-day-sunny'> </i>");
          break;
        case 'few clouds':
          $('.weather-data').append("<i class='wi wi-day-cloudy'> </i>");
          break;
        case 'scattered clouds':
          $('.weather-data').append("<i class='wi wi-cloudy'> </i>");
          break;
        case 'broken clouds':
          $('.weather-data').append("<i class='wi wi-cloudy'> </i>");
          break;
        case 'shower rain':
          $('.weather-data').append("<i class='wi wi-day-showers'> </i>");
          break;
        case 'rain':
          $('.weather-data').append("<i class='wi wi-day-rain'> </i>");
          break;
        case 'thunderstorm':
          $('.weather-data').append("<i class='wi wi-day-thunderstorm'> </i>");
          break;
        case 'snow':
          $('.weather-data').append("<i class='wi wi-day-snow'> </i>");
          break;
        case 'mist':
          $('.weather-data').append("<i class='wi wi-day-sprinkle'> </i>");
      }
    });
}
