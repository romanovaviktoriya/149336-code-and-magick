'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireballElement = document.querySelector('.setup-fireball-wrap');

  function getRandomColor(element) {
    var color = [];
    if (element === setupFireballElement) {
      color = FIREBALL_COLORS;
    } else if (element === setupWizardEyesElement) {
      color = EYES_COLOR;
    } else {
      color = COAT_COLOR;
    }
    return color[Math.floor(color.length * Math.random())];
  }

  window.colorize = function (element) {
    var color = getRandomColor(element);
    if (element === setupFireballElement) {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
  };
})();
