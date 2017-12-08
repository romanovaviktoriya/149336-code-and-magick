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
  blockSetupElement.classList.remove('hidden');

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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);

  blockSetupElement.querySelector('.setup-similar').classList.remove('hidden');

  // setup.js
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');

  setupWizardCoat.addEventListener('click', function () {
    // setupWizardCoat.style.fill = getCoatColor(COAT_COLOR);
    window.colorize(setupWizardCoat);
  });

  setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = getEyesColor(EYES_COLOR);
  });

  setupFireball.addEventListener('click', function () {
    setupFireball.style.background = FIREBALL_COLORS[getRandomInteger(0, FIREBALL_COLORS.length - 1)];
  });
})();
