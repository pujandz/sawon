/**
 * Scroll-linked work experience slider.
 *
 * Behaviour:
 *  1. When the section reaches the top of the viewport the page pins —
 *     normal page scroll stops.
 *  2. The user keeps scrolling; each full viewport-height of scroll
 *     advances one company slide (Algomindz → Digitomark → Dcastalia).
 *  3. After the last slide the section unpins and the page scrolls normally.
 *
 * Each slide gets 1.5× the viewport height of scroll distance so the
 * transition feels deliberate rather than instant.
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
    var wrap    = document.querySelector('.feature-work-experience-wrap');
    if (!section || !wrap) return;

    // Prevent Swiper's own touch/drag from competing with scroll.
    swiper.allowTouchMove = false;

    // Each extra slide = 1.5 viewport heights of scroll distance.
    var scrollPerSlide = window.innerHeight * 1.5;

    ScrollTrigger.create({
      // Pin when the dome's flat bottom aligns with the viewport bottom.
      trigger : wrap,
      start   : 'bottom bottom',
      end     : '+=' + (total - 1) * scrollPerSlide,
      pin     : section,
      scrub   : 1,
      snap    : {
        // Snap to each slide's exact position after the user stops scrolling.
        snapTo   : 1 / (total - 1),
        duration : { min: 0.4, max: 0.8 },
        ease     : 'power2.inOut',
      },
      onUpdate: function (self) {
        var idx = Math.min(total - 1, Math.round(self.progress * (total - 1)));
        if (swiper.activeIndex !== idx) {
          swiper.slideTo(idx, 500, false);
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
