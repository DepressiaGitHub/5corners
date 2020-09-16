'use strict';

(function () {
  var jobList = document.querySelector('.job-list');
  var navToggle = document.querySelector('.main-nav__toggle');

  jobList.classList.remove('job-list--nojs');

  navToggle.addEventListener('click', function() {
    if (jobList.classList.contains('job-list--closed')) {
      jobList.classList.remove('job-list--closed');
      jobList.classList.add('job-list--opened');
    } else {
      jobList.classList.add('job-list--closed');
      jobList.classList.remove('job-list--opened');
    }
  })
})();
