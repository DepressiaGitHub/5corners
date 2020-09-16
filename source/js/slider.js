'use strict';

(function () {
  var slider = document.querySelector('.main-slider');
  var startX = 0;

  var handleStart = function (evt) {
    startX = evt.changedTouches[0].pageX;
  };

  var handleEnd = function (evt) {
    var endX = evt.changedTouches[0].pageX;
    var checkedInputNumber = 0;
    var sliderInputs = document.querySelectorAll('.main-slider input[name=toggle]');
    sliderInputs.forEach((i, index) => {
      if (i.checked) {
        checkedInputNumber = index;
      }
    });

    var resultCheckedInputNumber = checkedInputNumber;
    if (endX - startX > 100) {
      resultCheckedInputNumber = checkedInputNumber - 1;
    } else if (endX - startX < -100) {
      resultCheckedInputNumber = checkedInputNumber + 1;
    }

    if (resultCheckedInputNumber > 2) {
      resultCheckedInputNumber = 2;
    }
    if (resultCheckedInputNumber < 0) {
      resultCheckedInputNumber = 0;
    }

    sliderInputs.forEach((i, index) => {
      if (resultCheckedInputNumber === index) {
        i.checked = true;
      }
    });
  };

  slider.addEventListener("touchstart", handleStart, false);
  slider.addEventListener("touchend", handleEnd, false);
})();
