// Arundel draft site: menu button + age check popup.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Age check. The live site uses ageverify.com today; this is a simple
  // stand-in so the board can see how it looks. It remembers "yes" for 30 days.
  var gate = document.getElementById('age-gate');
  if (!gate) return;
  var KEY = 'arundel-age-ok';
  var ok = false;
  try { ok = Number(localStorage.getItem(KEY) || 0) > Date.now(); } catch (e) {}
  if (!ok) { gate.hidden = false; document.body.style.overflow = 'hidden'; }
  gate.querySelector('[data-age="yes"]').addEventListener('click', function () {
    try { localStorage.setItem(KEY, String(Date.now() + 30 * 864e5)); } catch (e) {}
    gate.hidden = true; document.body.style.overflow = '';
  });
  gate.querySelector('[data-age="no"]').addEventListener('click', function () {
    gate.querySelector('.no').style.display = 'block';
  });
})();
