'use strict';
(function () {
  var COAT_COLORS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var form = document.querySelector('.setup-wizard-form');
  var setupWizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireballElement = document.querySelector('.setup-fireball-wrap');

  function inputChangeColor(element, color) {
    var inputHiddenElement = form.querySelectorAll('input[type="hidden"]');
    var classElement = element.classList[0];
    if (classElement.search('fireball') + 1) {
      classElement = classElement.substring(6, 14);
    } else {
      classElement = classElement.substring(7);
    }
    for (var i = 0; i < inputHiddenElement.length; i++) {
      var inputHiddenName = inputHiddenElement[i].name;
      if (inputHiddenName.indexOf(classElement) + 1) {
        inputHiddenElement[i].value = color;
        return;
      }
    }
  }

  function changeElementFill(element, color) {
    element.style.fill = color;
    inputChangeColor(element, color);
  }

  function changeElementBackground(element, color) {
    element.style.backgroundColor = color;
    inputChangeColor(element, color);
  }

  setupWizardCoatElement.addEventListener('click', function () {
    window.colorizeElement(setupWizardCoatElement, COAT_COLORS, changeElementFill);
  });

  setupWizardEyesElement.addEventListener('click', function () {
    window.colorizeElement(setupWizardEyesElement, EYES_COLORS, changeElementFill);
  });

  setupFireballElement.addEventListener('click', function () {
    window.colorizeElement(setupFireballElement, FIREBALL_COLORS, changeElementBackground);
  });
})();
