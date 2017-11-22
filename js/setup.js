/**
 * Created by КузяАсер on 22.11.2017.
 */
'use strict';
(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  function getNameHero() {
    var nameFamily;
    var a = randomInteger(0, WIZARD_NAMES.length - 1);
    var b = randomInteger(0, WIZARD_SURNAMES.length - 1);
    nameFamily = WIZARD_NAMES[a] + ' ' + WIZARD_SURNAMES[b];
    return nameFamily;
  }
  function getCoatColor() {
    var indexColor = randomInteger(0, COAT_COLOR.length - 1);
    coatColor = COAT_COLOR[indexColor];
    return coatColor;
  }
  function getEyesColor() {
    var indexColor = randomInteger(0, EYES_COLOR.length - 1);
    eyesColor = EYES_COLOR[indexColor];
    return eyesColor;
  }

  var blockSetup = document.querySelector('.setup');
  blockSetup.classList.remove('hidden');

  var similarListElement = blockSetup.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var nameFamily = getNameHero(WIZARD_NAMES, WIZARD_SURNAMES);
    var coatColor = getCoatColor(COAT_COLOR);
    var eyesColor = getEyesColor(EYES_COLOR);
    wizards[i] = {name: nameFamily, coatColor: coatColor, eyesColor: eyesColor};
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);

  blockSetup.querySelector('.setup-similar').classList.remove('hidden');
})();
