// Mobile navigation toggle.
(function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (!button || !nav) return;

  function setOpen(open) {
    nav.setAttribute('data-open', String(open));
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  setOpen(false);

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) setOpen(false);
  });
})();
