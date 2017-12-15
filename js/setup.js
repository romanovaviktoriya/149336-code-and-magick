/**
 * Created by КузяАсер on 22.11.2017.
 */
'use strict';
(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function getRandomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  function getNameHero() {
    var fullName;
    var firstName = getRandomInteger(0, WIZARD_NAMES.length - 1);
    var lastName = getRandomInteger(0, WIZARD_SURNAMES.length - 1);
    fullName = WIZARD_NAMES[firstName] + ' ' + WIZARD_SURNAMES[lastName];
    return fullName;
  }
  function getCoatColor() {
    var indexColor = getRandomInteger(0, COAT_COLOR.length - 1);
    return COAT_COLOR[indexColor];
  }
  function getEyesColor() {
    var indexColor = getRandomInteger(0, EYES_COLOR.length - 1);
    return EYES_COLOR[indexColor];
  }

  var blockSetupElement = document.querySelector('.setup');
  // blockSetupElement.classList.remove('hidden');

  var similarListElement = blockSetupElement.querySelector('.setup-similar-list');

  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = [];

  function getGenerateArray() {
    for (var i = 0; i < 4; i++) {
      wizards[i] = {name: getNameHero(WIZARD_NAMES, WIZARD_SURNAMES), coatColor: getCoatColor(COAT_COLOR), eyesColor: getEyesColor(EYES_COLOR)};
    }
  }
  getGenerateArray();

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function successRenderWizardHandler(wizard) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < 4; j++) {
      fragment.appendChild(renderWizard(wizard[getRandomInteger(0, wizard.length - 1)]));
    }
    similarListElement.appendChild(fragment);

    blockSetupElement.querySelector('.setup-similar').classList.remove('hidden');
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

  var form = blockSetupElement.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (event) {
    window.backend.save(new FormData(form), function () {
      blockSetupElement.classList.add('hidden');
    }, errorRenderWizardHandler);
    event.preventDefault();
  });

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
    window.colorizeElement(setupWizardCoatElement, COAT_COLOR, changeElementFill);
  });

  setupWizardEyesElement.addEventListener('click', function () {
    window.colorizeElement(setupWizardEyesElement, EYES_COLOR, changeElementFill);
  });

  setupFireballElement.addEventListener('click', function () {
    window.colorizeElement(setupFireballElement, FIREBALL_COLORS, changeElementBackground);
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
