'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');
  var focusSetupName = setup.querySelector('.setup-user-name');

  function onPopupEscPress(event) {
    window.util.isEscEvent(event, closePopup);
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    if (focusSetupName === document.activeElement) {
      event.preventDefault();
    } else {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, closePopup);
  });

  setupSubmit.addEventListener('click', function () {
    closePopup();
  });

  setupSubmit.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, closePopup);
  });
})();
