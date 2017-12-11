'use strict';
(function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var setupSubmitElement = setupElement.querySelector('.setup-submit');
  var focusSetupNameElement = setupElement.querySelector('.setup-user-name');

  function calculationCoordinate() {
    var enterCoords = {
      x: setupElement.offsetLeft,
      y: setupElement.offsetTop
    };
    return [enterCoords.x, enterCoords.y];
  }
  var enterCoords = calculationCoordinate();

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
      // сброс координат окна на первоначальные
      setupElement.style.top = enterCoords[1] + 'px';
      setupElement.style.left = enterCoords[0] + 'px';
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

  var dialogHandleElement = setupElement.querySelector('.setup-user-pic');

  // начало перетаскивания окна
  dialogHandleElement.addEventListener('mousedown', function (event) {
    event.preventDefault();

    // стартовые координаты
    var startCoords = {
      x: event.clientX,
      y: event.clientY
    };

    // обновлять смещение относительно первоначальной точки
    var onMouseMove = function (moveEvent) {
      moveEvent.preventDefault();

      var shift = {
        x: startCoords.x - moveEvent.clientX,
        y: startCoords.y - moveEvent.clientY
      };

      startCoords = {
        x: moveEvent.clientX,
        y: moveEvent.clientY
      };

      setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
      setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvent) {
      upEvent.preventDefault();

      // при отпускании мыши прекращаем слушать события движения мыши
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    // обработчики события передвижения мыши и отпускания кнопки мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
