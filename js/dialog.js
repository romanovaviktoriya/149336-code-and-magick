'use strict';
(function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var setupSubmitElement = setupElement.querySelector('.setup-submit');
  var focusSetupNameElement = setupElement.querySelector('.setup-user-name');

  function onPopupEscPress(event) {
    window.util.isEscEvent(event, closePopup);
  }

  function openPopup() {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    if (focusSetupNameElement === document.activeElement) {
      event.preventDefault();
    } else {
      setupElement.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }
  }

  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupOpenElement.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, openPopup);
  });

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupCloseElement.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, closePopup);
  });

  setupSubmitElement.addEventListener('click', function () {
    closePopup();
  });

  setupSubmitElement.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, closePopup);
  });
})();
