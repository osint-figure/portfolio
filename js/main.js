$(function() {

  "use strict";

  const options = {
    containers: ["#swup", "#swupMenu"],
    animateHistoryBrowsing: true,
  };

  const swup = new Swup(options);

  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector('#scrollbar2'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  $(document).ready(function() {
    anime({
      targets: '.ls-preloader .ls-preloader-content',
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: 'linear',
      complete: function(anim) {

      }
    });
    anime({
      targets: '.ls-preloader',
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: 'linear',
      complete: function(anim) {
        $('.ls-preloader').css('display', 'none');
      }
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(1);

  anime({
    targets: '.ls-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });

  anime({
    targets: '.ls-counter',
    delay: 1300,
    opacity: [1, 1],
    complete: function(anim) {
      $('.ls-counter').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'linear',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2500,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(1);

  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2600,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(0.9);

  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2700,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(0.7);

  var bar = new ProgressBar.Line(lineprog1, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2800,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.94);

  var bar = new ProgressBar.Line(lineprog2, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2900,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.84);

  var bar = new ProgressBar.Line(lineprog3, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3000,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.77);

  var bar = new ProgressBar.Line(lineprog4, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3100,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.75);

  var bar = new ProgressBar.Line(lineprog5, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.72);

  var bar = new ProgressBar.Line(lineprog6, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.64);

  var bar = new ProgressBar.Line(lineprog7, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.64);

  var bar = new ProgressBar.Line(lineprog8, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.63);

  var bar = new ProgressBar.Line(lineprog9, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.61);

  var bar = new ProgressBar.Line(lineprog10, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.52);

  $('.ls-input').keyup(function() {
    if ($(this).val()) {
      $(this).addClass('ls-active');
    } else {
      $(this).removeClass('ls-active');
    }
  });

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {

      var tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl
        .add({
          targets: '.ls-submit',
          opacity: 0,
          scale: .5,
        })
        .add({
          targets: '.ls-success',
          scale: 1,
          height: '45px',
        })
    });
    return false;
  });

  $('.ls-filter a').on('click', function() {
    $('.ls-filter .ls-current').removeClass('ls-current');
    $(this).addClass('ls-current');

    var selector = $(this).data('filter');
    $('.ls-grid').isotope({
      filter: selector
    });
    return false;
  });

  $('.ls-grid').isotope({
    filter: '*',
    itemSelector: '.ls-grid-item',
    transitionDuration: '.6s',
  });

  var swiper = new Swiper('.ls-testimonial-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ls-testi-swiper-next',
      prevEl: '.ls-testi-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper('.ls-works-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ls-works-swiper-next',
      prevEl: '.ls-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper('.ls-blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ls-blog-swiper-next',
      prevEl: '.ls-blog-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "thumbs",
      "close"
    ],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "close"
    ],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $.fancybox.defaults.hash = false;

  $('.current-menu-item a').clone().appendTo('.ls-current-page');

  $('.ls-map-overlay').on('click', function() {
    $(this).addClass('ls-active');
  });

  $('.ls-info-bar-btn').on('click', function() {
    $('.ls-info-bar').toggleClass('ls-active');
    $('.ls-menu-bar-btn').toggleClass('ls-disabled');
  });

  $('.ls-menu-bar-btn').on('click', function() {
    $('.ls-menu-bar-btn , .ls-menu-bar').toggleClass("ls-active");
    $('.ls-info-bar-btn').toggleClass('ls-disabled');
  });

  $('.ls-info-bar-btn , .ls-menu-bar-btn').on('click', function() {
    $('.ls-content').toggleClass('ls-active');
  });

  $('.ls-curtain , .ls-mobile-top-bar').on('click', function() {
    $('.ls-menu-bar-btn , .ls-menu-bar , .ls-info-bar , .ls-content , .ls-menu-bar-btn , .ls-info-bar-btn').removeClass('ls-active , ls-disabled');
  });

  $('.menu-item').on('click', function() {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('ls-active');
    } else {
      $('.ls-menu-bar-btn , .ls-menu-bar , .ls-info-bar , .ls-content , .ls-menu-bar-btn , .ls-info-bar-btn').removeClass('ls-active , ls-disabled');
    }
  });

  document.addEventListener("swup:contentReplaced", function() {

    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $("#form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {

        var tl = anime.timeline({
          easing: 'easeOutExpo',
        });

        tl
          .add({
            targets: '.ls-submit',
            opacity: 0,
            scale: .5,
          })
          .add({
            targets: '.ls-success',
            scale: 1,
            height: '45px',
          })
      });
      return false;
    });

    $('.ls-grid').isotope({
      filter: '*',
      itemSelector: '.ls-grid-item',
      transitionDuration: '.6s',
    });

    $('.ls-filter a').on('click', function() {
      $('.ls-filter .ls-current').removeClass('ls-current');
      $(this).addClass('ls-current');

      var selector = $(this).data('filter');
      $('.ls-grid').isotope({
        filter: selector
      });
      return false;
    });

    anime({
      targets: '.ls-counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: 'linear',
    });

    $('.ls-counter').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    var swiper = new Swiper('.ls-testimonial-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.ls-testi-swiper-next',
        prevEl: '.ls-testi-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        }
      },
    });

    var swiper = new Swiper('.ls-works-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.ls-works-swiper-next',
        prevEl: '.ls-works-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    var swiper = new Swiper('.ls-blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.ls-blog-swiper-next',
        prevEl: '.ls-blog-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close"
      ],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $.fancybox.defaults.hash = false;

    $('.current-menu-item a').clone().prependTo('.ls-current-page');

    $('.menu-item').on('click', function() {
      if ($(this).hasClass('menu-item-has-children')) {
        $(this).children('.sub-menu').toggleClass('ls-active');
      } else {
        $('.ls-menu-bar-btn , .ls-menu-bar , .ls-info-bar , .ls-content , .ls-menu-bar-btn , .ls-info-bar-btn').removeClass('ls-active , ls-disabled');
      }
    });

  })

});

document.addEventListener('contextmenu', event => event.preventDefault());

var Louis_love = false;
var Louis_halloween = false

$(document)['ready'](function () {

    var _0x399ec4 = {};

    function _0x326088(_0x19a53d, _0x567a79) {
        return Math['round'](Math['random']() * (_0x567a79 - _0x19a53d + 0x1)) + _0x19a53d;
    }
    $(window)['mousemove'](function (_0x32fd1b) {
        _0x399ec4['x'] = _0x32fd1b['pageX'];
        _0x399ec4['y'] = _0x32fd1b['pageY'];
        if (_0x399ec4['x'] > 0x0 && _0x399ec4['y'] > 0x0) {
            var _0xd6406d = Louis_halloween ?  Math['floor'](Math['random']() *  random_halloween_array['length']) : Louis_love ? Math['floor'](Math['random']() *  random_love_array['length']) : Math['floor'](Math['random']() *  random_images_array['length']);
            var _0x32090d = Louis_halloween ? random_halloween_array[_0xd6406d] : Louis_love ? random_love_array[_0xd6406d] : random_images_array[_0xd6406d];
            var _0xb9f424 = '<img height=\"25px\" width=\"25px\" src=' + _0x32090d + ' alt=\"\" border=\"0\">';
            var _0x3ab1c1 = 0xa;
            var _0x5c2c3d = _0x326088(0x2, 0x1);
            size = 'height:P' + _0x5c2c3d + 'px;Pwidth: ' + _0x5c2c3d + 'px;';
            var _0x327bff = 'left: ' + _0x326088(_0x399ec4['x'] - _0x3ab1c1 - _0x5c2c3d, _0x399ec4['x'] + _0x3ab1c1) + 'px;';
            var _0xe8760 = 'top: ' + _0x326088(_0x399ec4['y'] - _0x3ab1c1 - _0x5c2c3d, _0x399ec4['y'] + _0x3ab1c1) + 'px;';
            var _0x167e83 = _0x327bff + _0xe8760 + size;
            $('<div class=\'pointer\' style=\'' + _0x167e83 + '\'>' + _0xb9f424 + '</div>')['appendTo']('#Louis')['one']('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this)['remove']();
            });
        }
    });

 });


var random_love_array = [
  'https://cdn.cbkdz.eu/img/emoji/two-hearts_1f495.png',
  'https://cdn.cbkdz.eu/img/emoji/rose.png',
  'https://cdn.cbkdz.eu/img/emoji/red-heart_2764-fe0f.png'
];

var random_halloween_array = [
  'https://cdn.cbkdz.eu/img/emoji/jack-o-lantern_1f383.png',
  'https://cdn.cbkdz.eu/img/emoji/skull-and-crossbones_2620-fe0f.png',
  'https://cdn.cbkdz.eu/img/emoji/spider-web_1f578-fe0f.png'
];

var random_images_array = [
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-open-mouth-and-cold-sweat_1f605.png',
    'https://cdn.cbkdz.eu/img/emoji/face-with-tears-of-joy_1f602.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-smiling-eyes-and-three-hearts_1f970.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-heart-shaped-eyes_1f60d.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-smiling-eyes_1f60a.png',
    'https://cdn.cbkdz.eu/img/emoji/overheated-face_1f975.png',
    'https://cdn.cbkdz.eu/img/emoji/face-with-pleading-eyes_1f97a.png',
    'https://cdn.cbkdz.eu/img/emoji/heavy-black-heart_2764.png',
    'https://cdn.cbkdz.eu/img/emoji/speak-no-evil-monkey_1f64a.png',
    'https://cdn.cbkdz.eu/img/emoji/see-no-evil-monkey_1f648.png',
    'https://cdn.cbkdz.eu/img/emoji/freezing-face_1f976.png',
    'https://cdn.cbkdz.eu/img/emoji/serious-face-with-symbols-covering-mouth_1f92c.png',
    'https://cdn.cbkdz.eu/img/emoji/grinning-face-with-one-large-and-one-small-eye_1f92a.png',
    'https://cdn.cbkdz.eu/img/emoji/hugging-face_1f917.png',
    'https://cdn.cbkdz.eu/img/emoji/face-with-rolling-eyes_1f644.png',
    'https://cdn.cbkdz.eu/img/emoji/face-throwing-a-kiss_1f618.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-halo_1f607.png',
    "https://cdn.cbkdz.eu/img/emoji/butterfly_1f98b.png"
 ];

//Emoji Cursor ~ Louis S.