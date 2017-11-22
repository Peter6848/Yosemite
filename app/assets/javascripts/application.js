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
  weatherAPI();
})

var weatherAPI = function(){
var long;
var lat;
var tempFar;
var api;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=fcde608bb653b40f860049b6be7f3666';
      $.getJSON(api, function(data){
        var weatherType = data.weather[0].description;
        var kelvin = data.main.temp;
        var windSpeed = data.wind.speed;
        var city = data.name;
        tempFar = Math.floor((kelvin)*(9/5)-459.67);
        console.log(city);
        $('#city').text('City: ' + city);
        $('#weather-type').text('Looks like: ' + weatherType);
        if(tempFar < 65) {
          $('#temperature').text('Temperature: ' + tempFar + '°F.  Dress for cold weather!')
          $('.weather-data').prepend("<img src='/assets/cold_weather.jpg' />");
        } else {
          $('#temperature').text('Temperature: ' + tempFar + '°F.  Dress for warm weather!')
          $('.weather-data').prepend("<img src='cold_weather.jpg' />");
        }
        $('#wind').text('windSpeed: ' + windSpeed + 'mph');
        console.log(tempFar);
        console.log(api);
        // $('.weather-data').html('latitude: ' + lat + '<br>longitude: ' + long);
      });
    })
  }
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
