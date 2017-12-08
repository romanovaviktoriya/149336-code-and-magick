'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var getRandomColor = function () {
    return COAT_COLOR[Math.floor(COAT_COLOR.length * Math.random())];
  };

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      var color = getRandomColor();
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
