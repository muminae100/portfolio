$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 1000;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });

  // scroll indicator
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

// scroll to top button
$(document).ready(function() {
  $(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
  $('#toTopBtn').fadeIn();
  } else {
  $('#toTopBtn').fadeOut();
  }
  });

  $('#toTopBtn').click(function() {
  $("html, body").animate({
  scrollTop: 0
  }, 1000);
  return false;
  });
  });

  // display navigation menu
  /* Open */
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  // footer
  // copyright date
  function getYearFunction() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("copyright-date").innerHTML = n;
  }
  getYearFunction();