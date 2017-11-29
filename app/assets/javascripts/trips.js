// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  showTripInfoListener();
})

var showTripInfoListener = function(){
  $('.details-button').on('click', function(e){
    e.preventDefault();

    var tripInfo = $(this).closest('.trips').find('.trip-info');
    tripInfo.toggle('slow');

    $(this).css('background-color', '#272728');
  });
}
