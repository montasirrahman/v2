$(document).ready(function() {
   $(document).on('scroll', function() {
     var head = $(this).scrollTop()
     if (head > 2) {
       $('header').addClass('sticky');
     } else {
       $('header').removeClass('sticky');
     }

   });
 });

 //this is scroll too top

 $(document).ready(function() {
   $(".scroll-top").on('click', function() {
     $('body,html').animate({
       scrollTop: 0
     }, 2000);
     return false;
   });
 });

 //this is scroll too hide on top 

 $(document).scroll(function() {
   var scrolli = $(this).scrollTop();

   if (scrolli < 100) {
     $('a.scroll-top').addClass('hide');

   } else {
     $('a.scroll-top').removeClass('hide');
   }

 });

 // hide on scroll

 var lastScrollTop = 0;
 header = document.getElementById("header");
 window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    $('header').addClass('hide');
  } else {
    $('header').removeClass('hide');
  }
  lastScrollTop = scrollTop;
 })

 function navbar_show() {
  document.getElementById("mobile_nav").style.display="inline-block";
 }
 function navbar_hide() {
  document.getElementById("mobile_nav").style.display="none";
 }