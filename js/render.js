'use strict';
(function () {
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  var similar = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };
})();
