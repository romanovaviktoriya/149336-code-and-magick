'use strict';
(function () {
  var setupFireballElement = document.querySelector('.setup-fireball-wrap');

  function getRandomColor(color) {
    return color[Math.floor(color.length * Math.random())];
  }

  window.colorize = function (element, color) {
    var colorArray = getRandomColor(color);
    if (element === setupFireballElement) {
      element.style.backgroundColor = colorArray;
    } else {
      element.style.fill = colorArray;
    }
  };
})();
