// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require skel.min
//= require skel-viewport.min
//= require util
//= require bootstrap-sprockets
//= require_tree ./ie
//= require_tree ./jcarousel

$(document).ready(function(){
  $('.jcarousel').jcarouselAutoscroll({
    interval: 3000
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 420) {
      $('#who-we-are').slideDown(1000);
    }
    if ($(window).scrollTop() > 420) {
      $('#what-we-do').slideDown(1000);
    }
    if ($(window).scrollTop() > 420) {
      $('#what-people-say').slideDown(1000);
    }
  });

  setTimeout(function() { $("[data-dismiss=alert]").click(); }, 3000);
});
