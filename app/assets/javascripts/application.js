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
})

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
    // debugger
    // tripInfo.css('visibility', 'visible');
    // tripInfo.toggle('slow', function(){
    //   tripInfo.show();
    // })

    $(this).css('background-color', '#272728');
  })
}
