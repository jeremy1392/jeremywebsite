/* ============================================================
   "The race for capability" article: gate simulation.
   Shared by the FR and EN pages. All strings live in the HTML
   (data-msg-* attributes), so this file carries no copy.
   ============================================================ */

(function () {
  'use strict';

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-flow]').forEach(function (fig) {
    var steps = Array.prototype.slice.call(fig.querySelectorAll('.flow-steps > li'));
    var buttons = Array.prototype.slice.call(fig.querySelectorAll('[data-flow-run]'));
    var status = fig.querySelector('.flow-status');
    var timers = [];

    function msg(name) { return fig.getAttribute('data-msg-' + name) || ''; }
    function reset() {
      timers.forEach(clearTimeout);
      timers = [];
      steps.forEach(function (s) { s.classList.remove('is-active', 'is-passed', 'is-blocked', 'is-done'); });
    }
    function later(fn, ms) { timers.push(setTimeout(fn, reduced ? 0 : ms)); }

    function run(outcome) {
      reset();
      buttons.forEach(function (b) { b.disabled = true; });
      status.textContent = msg('running');

      // Fix, then tests, then the gate: each lights up, then is marked as passed.
      [0, 1, 2].forEach(function (i) {
        later(function () {
          if (i > 0) { steps[i - 1].classList.remove('is-active'); steps[i - 1].classList.add('is-passed'); }
          steps[i].classList.add('is-active');
        }, i * 650);
      });

      later(function () {
        var gate = steps[2];
        gate.classList.remove('is-active');
        if (outcome === 'allowed') {
          gate.classList.add('is-passed');
          steps[3].classList.add('is-done');
        } else {
          gate.classList.add('is-blocked');
        }
        status.textContent = msg(outcome);
        buttons.forEach(function (b) { b.disabled = false; });
      }, 3 * 650);
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { run(b.getAttribute('data-flow-run')); });
    });
  });
})();
