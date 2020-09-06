'use strict';

(function () {
  var menu = document.querySelector('.page-header');
  var body = document.querySelector('body');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 1150) {
      menu.classList.add('page-header--white');
      body.classList.add('body--white');
    } else {
      menu.classList.remove('page-header--white');
      body.classList.remove('body--white');
    }
  });
})();
