/**
 * Scroll-linked work experience slider.
 * Pins the section and advances the Swiper one slide per scroll step.
 * Loaded after main.js so Swiper instances already exist.
 */
(function () {
  'use strict';

  function init() {
    var mainEl = document.querySelector('.fw_main_slider_active');
    if (!mainEl || !mainEl.swiper) return;

    var swiper = mainEl.swiper;
    var total  = swiper.slides.length;
    if (total <= 1) return;

    var section = document.querySelector('.work-experience-section-1');
    if (!section) return;

    // Disable the Swiper keyboard / touch so scroll drives it exclusively.
    swiper.allowTouchMove = false;

    ScrollTrigger.create({
      trigger : section,
      start   : 'top top',
      // Each extra slide = one full viewport height of scrollable distance.
      end     : '+=' + (total - 1) * window.innerHeight,
      pin     : true,
      scrub   : 0.5,
      snap    : {
        snapTo   : 1 / (total - 1),
        duration : { min: 0.2, max: 0.5 },
        ease     : 'power1.inOut',
      },
      onUpdate: function (self) {
        var idx = Math.min(total - 1, Math.round(self.progress * (total - 1)));
        if (swiper.activeIndex !== idx) {
          swiper.slideTo(idx, 400, false);
        }
      },
    });
  }

  // Retry until main.js has mounted the Swiper instance on the DOM element.
  var tries = 0;
  function tryInit() {
    var mainEl = document.querySelector('.fw_main_slider_active');
    if (mainEl && mainEl.swiper) {
      init();
    } else if (tries < 30) {
      tries++;
      setTimeout(tryInit, 150);
    }
  }

  tryInit();
})();
