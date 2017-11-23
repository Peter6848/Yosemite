// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
$(document).ready(function(){
  headerActiveListener();
  headerAnimation();
  showTripInfoListener();
  yosemiteWeatherAPI();
  showCelciusListener();
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
  var tempFar;
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat=37.865101&lon=-119.538330&appid=fcde608bb653b40f860049b6be7f3666';
    $.getJSON(api, function(data){
      var weatherType = data.weather[0].description;
      var kelvin = data.main.temp;
      var windSpeed = data.wind.speed;
      var city = data.name;
      var tempFar = Math.floor((kelvin)*(9/5)-459.67);
      var tempCel = Math.floor(kelvin - 273);
      // $('#city').text(city);
      $('#weather-type').text(weatherType);
      $('#wind').text('Wind speed of ' + windSpeed + 'mph');
      if(tempFar < 65) {
        $('#temperature').text('Temperature of ' + tempFar + '°F or ' + tempCel + '°C')
        // $('.weather-data').prepend("<img src='/assets/' />");
      } else {
        $('#temperature').text('Temperature of ' + tempFar + '°F or ' + tempCel + '°C')
        // $('.weather-data').prepend("<img src='/assets/' />");
      }
      // if(weatherType === 'clear sky') {
      //   $('.weather-data').append("<i class='wi wi-day-sunny'> </i>");
      // }
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

var showCelciusListener = function(){
  $('#celcius').on('click', function(){
    $()
  });
}

var headerActiveListener = function(){
  $('.header > li').on('click', function(e){
    $('.header > li').removeClass('active');
    $(this).addClass('active');
  });
}

var headerAnimation = function(){
  $('.header-link').hide();
  $('.header-icon').on('mousedown', function(){
    $('.header-link').slideDown('fast');
  })
  $('.header').on('mouseleave', function(){
    $('.header-link').hide();
  })
}

var showTripInfoListener = function(){
  $('.details-button').on('click', function(e){
    e.preventDefault();

    var tripInfo = $(this).closest('.trips').find('.trip-info');
    tripInfo.toggle('slow');

    $(this).css('background-color', '#272728');
  })
}
