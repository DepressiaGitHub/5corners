'use strict';

(function () {
  var menu = document.querySelector('.page-header');
  var body = document.querySelector('body');

  window.addEventListener('scroll', function () {
    var offsetHeight = document.querySelector('.page-main__planet').offsetHeight;

    if (window.pageYOffset >= offsetHeight) {
      menu.classList.add('page-header--white');
      body.classList.add('body--white');
    } else {
      menu.classList.remove('page-header--white');
      body.classList.remove('body--white');
    }
  });
})();
