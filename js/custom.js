/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ed7733"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ed7733"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.9,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#a9a9a9",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */
  
 (function() {
  'use strict';

  /*----------------------------------------
    Detect Mobile
  ----------------------------------------*/
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
      BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
      iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
      Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
      Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
      any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  /*----------------------------------------
    Back to top
  ----------------------------------------*/
  var backToTop = function() {
    jQuery('.js-backtotop').on('click', function(e){
      e.preventDefault();
      jQuery('html, body').animate({
          scrollTop: jQuery('body').offset().top
      }, 700, 'easeInOutExpo');

    });
  }

  /*----------------------------------------
    More
  ----------------------------------------*/
  var moreControl = function() {
    jQuery('.js-btn-more').on('click', function(e){
      e.preventDefault();
      jQuery('.probootstrap-header-top').toggleClass('active');
    });
  };


