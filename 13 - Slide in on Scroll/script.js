'use strict';

// Returns a function, that, as long as it continues to be invoked, will not be triggered.
// The function will be called after it stops being called for N milliseconds.

/*
Start with no timeout.
If the produced function is called, clear and reset the timeout.
If the timeout is hit, call the original function.
 */

function debounce(func, wait = 20) {
  var timeout;
  return function() {
    // console.log('----- START -----');
    var context = this, args = arguments;
    var later = function() {
      // console.log(`RAZ du timeout (${timeout})`);
      timeout = null;
    };
    var callNow = !timeout;
    // console.log('clear timeout: ', timeout);
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    // console.log('set timeout: ', timeout);
    if (callNow) {
      func.apply(context, args);
    }
    // console.log('----- STOP -----');
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    console.log(sliderImage.src);
    console.log('offsetTop: ', sliderImage.offsetTop);
    // position du bas de la page
    const bottomOfThePage = window.scrollY + window.innerHeight ;
    console.log('slideInAt: ' + bottomOfThePage);
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    console.log('imageBottom: ' + imageBottom);

    // half way through the image
    const isHalfShown = bottomOfThePage > sliderImage.offsetTop + (sliderImage.height / 2);
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
