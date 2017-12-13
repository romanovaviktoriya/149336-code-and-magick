'use strict';
(function () {
  function getRandomColor(colors) {
    return colors[Math.floor(colors.length * Math.random())];
  }

  window.colorizeElement = function (element, color, callback) {
    var colorElement = getRandomColor(color);

    if (typeof callback === 'function') {
      callback(element, colorElement);
    }
  };
})();
