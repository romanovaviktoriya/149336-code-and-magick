'use strict';
(function () {
  function getRandomColor(colors) {
    return colors[Math.floor(colors.length * Math.random())];
  }

  window.colorizeElement = function (element, colors, callback) {
    var colorElement = getRandomColor(colors);

    if (typeof callback === 'function') {
      callback(element, colorElement);
    }
  };
})();
