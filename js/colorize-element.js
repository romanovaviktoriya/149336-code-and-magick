'use strict';
(function () {
  function getRandomColor(colors) {
    return colors[Math.floor(colors.length * Math.random())];
  }

  window.colorizeElement = function (element, colors, callback) {
    var colorElement = getRandomColor(colors);
    if (element.classList[0].search('coat') + 1) {
      window.wizard.onCoatChange(colorElement);
    } else if (element.classList[0].search('eyes') + 1) {
      window.wizard.onEyesChange(colorElement);
    }

    if (typeof callback === 'function') {
      callback(element, colorElement);
    }
  };
})();
