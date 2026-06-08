/* ============================================================
   Elo — dropdown.js
   Controla o dropdown de Serviços na navbar
   ============================================================ */

(function () {
  /* Abre / fecha o dropdown clicado */
  window.toggleDropdown = function (btn) {
    var dropdown = btn.closest('.navbar__dropdown');
    var isOpen   = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));

    /* Fecha outros dropdowns eventualmente abertos */
    document.querySelectorAll('.navbar__dropdown.open').forEach(function (d) {
      if (d !== dropdown) {
        d.classList.remove('open');
        d.querySelector('.navbar__dropdown-toggle')
         .setAttribute('aria-expanded', 'false');
      }
    });
  };

  /* Fecha ao clicar fora */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar__dropdown')) {
      document.querySelectorAll('.navbar__dropdown.open').forEach(function (d) {
        d.classList.remove('open');
        d.querySelector('.navbar__dropdown-toggle')
         .setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* Fecha com a tecla Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.navbar__dropdown.open').forEach(function (d) {
        d.classList.remove('open');
        d.querySelector('.navbar__dropdown-toggle')
         .setAttribute('aria-expanded', 'false');
      });
    }
  });
})();
