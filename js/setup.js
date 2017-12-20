'use strict';
(function () {
  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  function updateWizards() {
    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  }

  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    window.debounce(updateWizards);
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    window.debounce(updateWizards);
  };

  function successRenderWizardHandler(data) {
    wizards = data;
    updateWizards();
  }

  function errorRenderWizardHandler(errorMessage) {
    var whereInsertFragmentElement = document.querySelector('.overlay.setup');
    var messageError = document.createElement('div');
    messageError.className = 'alert-danger';
    messageError.innerHTML = errorMessage;
    messageError.style = 'display:block;margin:0 auto;padding:10px;text-align:center; background-color:#ee4830;color:#ffffff';
    whereInsertFragmentElement.prepend(messageError);
  }

  window.backend.load(successRenderWizardHandler, errorRenderWizardHandler);

  var blockSetupElement = document.querySelector('.setup');
  var form = blockSetupElement.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (event) {
    window.backend.save(new FormData(form), function () {
      blockSetupElement.classList.add('hidden');
    }, errorRenderWizardHandler);
    event.preventDefault();
  });

  // Перетаскивание элементов из одного положения в другое
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text/plain', event.target.alt);
  });

  // элемент, в который переносятся исходный элемент
  var artifactsElement = document.querySelector('.setup-artifacts');

  // обрабатываем событие dragover и отменяем действие по умолчанию
  artifactsElement.addEventListener('dragover', function (event) {
    event.preventDefault();
    artifactsElement.style.outline = '2px dashed red';
    return false;
  });

  artifactsElement.addEventListener('drop', function (event) {
    event.target.style.backgroundColor = '';
    if (event.target.childNodes.length === 0) {
      event.target.appendChild(draggedItem.cloneNode(true));
    }
    artifactsElement.style.outline = '';
    event.preventDefault();
  });


  artifactsElement.addEventListener('dragenter', function (event) {
    event.target.style.backgroundColor = 'yellow';
    event.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (event) {
    event.target.style.backgroundColor = '';
    artifactsElement.style.outline = '';
    event.preventDefault();
  });
})();
