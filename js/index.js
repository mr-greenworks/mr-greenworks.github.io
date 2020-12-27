const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

window.onload = async function() {
  $('#svg-animation').css('opacity', '1');
  (() => {new Vivus(
    'svg-animation',
    {
        start: 'autostart',
        type: 'oneByOne',
        duration: 400,
        forceRender: false,
        animTimingFunction:Vivus.EASE
    },
    (obj) => {
        obj.el.classList.add('draw');
    }
  );})();

  await sleep(5000);
  
  $('#svg-title').css('opacity', '1');
  (() => {new Vivus(
    'svg-title',
    {
        start: 'autostart',
        type: 'oneByOne',
        duration: 100,
        forceRender: false,
        animTimingFunction:Vivus.EASE
    },
    (obj) => {
        obj.el.classList.add('draw');
    }
  );})();

  await sleep(3000);

  $('#loading-screen').addClass('loaded');
  $('.comment').each(function () {
    $(this).addClass('sacrifice1');
  })

  $('#element1').removeClass('trans');
  $('#element1').addClass('sacrifice2');
  await sleep(150);
  $('#element2').removeClass('trans');
  $('#element2').addClass('sacrifice2');
  await sleep(150);
  $('#element3').removeClass('trans');
  $('#element3').addClass('sacrifice2');
  await sleep(150);
  $('#element4').removeClass('trans');
  $('#element4').addClass('sacrifice2');
  await sleep(150);
  $('#element5').removeClass('trans');
  $('#element5').addClass('sacrifice2');
  await sleep(150);
  $('#element6').removeClass('trans');
  $('#element6').addClass('sacrifice2');
  await sleep(150);
  $('#element7').removeClass('trans');
  $('#element7').addClass('sacrifice2');
  await sleep(150);
  $('#element8').removeClass('trans');
  $('#element8').addClass('sacrifice2');

  grant_effect();
  
  $(window).scroll(function(){
    grant_effect();
  });
}

function grant_effect() {
  $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight) {
          if ($(this).hasClass('menu-title') || $(this).hasClass('work-title')) {
              $(this).addClass('effect-scroll09');
          } else {
              $(this).addClass('effect-scroll1');
          }
      }
  })
}