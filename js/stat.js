/**
 * Created by КузяАсер on 18.11.2017.
 */
'use strict';
(function () {
  function drawShadow(ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.arc(480, 170, 100, 0, Math.PI * 2, false);
    ctx.arc(395, 165, 135, 0, Math.PI * 2, false);
    ctx.arc(245, 165, 135, 0, Math.PI * 2, false);
    ctx.fill();
  }
  function drawCloud(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.arc(135, 160, 100, 0, Math.PI * 2, false);// 1
    ctx.arc(210, 140, 140, 0, Math.PI * 2, false);// 2
    ctx.arc(410, 140, 130, 0, Math.PI * 2, false);// 3
    ctx.arc(470, 160, 100, 0, Math.PI * 2, false);// 4
    ctx.arc(385, 155, 135, 0, Math.PI * 2, false);// 5
    ctx.arc(235, 155, 135, 0, Math.PI * 2, false);// 6
    ctx.fill();
    ctx.closePath();
  }
  function drawTitle(ctx) {
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 150, 40);
    ctx.fillText('Список результатов:', 150, 60);
  }
  window.renderStatistics = function (ctx, names, times) {
    var GIST_WIDTH = 40;
    var BASELINE = 20;
    var INDENT = 50;
    var INITIAL_X = 120;
    var INITIAL_Y = 80;
    var opacity;
    var GIST_HEIGHT = 150;

    drawShadow(ctx);
    drawCloud(ctx);
    drawTitle(ctx);

    var max = -1;

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }

    var step = GIST_HEIGHT / max;

    function getRandom(minElem, maxElem) {
      return Math.random() * (maxElem - minElem) + minElem;
    }

    for (var j = 0; j < times.length; j++) {
      if (names[j] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        opacity = getRandom(0, 1);
        ctx.fillStyle = 'rgba(0,0,255,' + opacity + ')';
      }
      ctx.fillRect(INITIAL_X + (GIST_WIDTH + INDENT) * j, 250 - times[j] * step, GIST_WIDTH, times[j] * step);
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillText(names[j], INITIAL_X + (GIST_WIDTH + INDENT) * j, 270);
      ctx.fillText(Math.round(times[j]), INITIAL_X + (GIST_WIDTH + INDENT) * j, INITIAL_Y + BASELINE / 2);
    }
  };
})();
