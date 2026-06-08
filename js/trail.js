/* trail.js — mouse trail for .hero and .page-hero sections */
(function () {
  var LIFE  = 650;
  var MAX_R = 5;
  var MAX_A = 0.22;

  function initTrail(section) {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;';
    section.insertBefore(canvas, section.firstChild);

    var ctx = canvas.getContext('2d');
    var pts = [];
    var raf = null;

    function resize() {
      canvas.width  = section.offsetWidth;
      canvas.height = section.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    section.addEventListener('mousemove', function (e) {
      var r = section.getBoundingClientRect();
      pts.push({
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        radius: 2 + Math.random() * (MAX_R - 2),
        born: performance.now()
      });
      if (!raf) tick();
    });

    function tick() {
      var now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts = pts.filter(function (p) { return now - p.born < LIFE; });
      pts.forEach(function (p) {
        var progress = (now - p.born) / LIFE;
        var alpha    = MAX_A * (1 - progress);
        var radius   = p.radius * (1 - progress * 0.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59,130,246,' + alpha.toFixed(3) + ')';
        ctx.fill();
      });
      raf = pts.length > 0 ? requestAnimationFrame(tick) : null;
    }
  }

  document.querySelectorAll('.hero, .page-hero').forEach(initTrail);
})();
