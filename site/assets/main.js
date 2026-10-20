/* =========================================================
   SOS Infante — comportamiento de interfaz
   Sin dependencias. Todo degrada a una página legible sin JS.
   ========================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* ---------- 1. Cabecera reactiva al scroll ----------
     Arriba: transparente y alta. Al bajar: compacta y se esconde.
     Al subir: reaparece. */
  var head = document.querySelector('.site-head');
  var nav = document.getElementById('nav');
  var burger = document.querySelector('.burger');

  if (head) {
    var lastY = window.scrollY;
    var ticking = false;

    var onScroll = function () {
      var y = window.scrollY;
      head.classList.toggle('is-stuck', y > 24);

      var menuAbierto = nav && nav.getAttribute('data-open') === 'true';
      if (!menuAbierto && y > 320) {
        head.classList.toggle('is-hidden', y > lastY + 6);
      } else {
        head.classList.remove('is-hidden');
      }
      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
    onScroll();
  }

  /* ---------- 2. Menú desplegable ---------- */
  if (burger && nav) {
    // El overlay arranca donde termina la cabecera, que cambia de alto según
    // la barra superior y el estado compacto.
    var medirCabecera = function () {
      if (!head) return;
      document.documentElement.style.setProperty(
        '--head-bottom', Math.round(head.getBoundingClientRect().bottom) + 'px'
      );
    };
    window.addEventListener('resize', medirCabecera);

    var toggle = function (abrir) {
      if (abrir) medirCabecera();
      nav.setAttribute('data-open', String(abrir));
      burger.setAttribute('aria-expanded', String(abrir));
      burger.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
      document.body.classList.toggle('nav-abierto', abrir);
      if (abrir && head) head.classList.remove('is-hidden');
    };

    burger.addEventListener('click', function () {
      toggle(nav.getAttribute('data-open') !== 'true');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) toggle(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        toggle(false);
        burger.focus();
      }
    });
  }

  /* ---------- 3. Aparición al entrar en pantalla ----------
     Sin JS o con movimiento reducido, todo queda visible. */
  var revelables = document.querySelectorAll('[data-reveal]');
  if (revelables.length && !reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var hijos = el.querySelectorAll(':scope > *');
        if (el.hasAttribute('data-reveal-stagger') && hijos.length) {
          Array.prototype.forEach.call(hijos, function (hijo, i) {
            hijo.style.transitionDelay = Math.min(i * 70, 420) + 'ms';
          });
        }
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(revelables, function (el) {
      el.classList.add('reveal-listo');
      io.observe(el);
    });
  }

  /* ---------- 4. Cifras que cuentan al aparecer ---------- */
  var contadores = document.querySelectorAll('[data-count]');
  if (contadores.length && !reduce && 'IntersectionObserver' in window) {
    var formatea = function (n) {
      return n.toLocaleString('es-EC');
    };
    var ioNum = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var destino = parseFloat(el.getAttribute('data-count'));
        var sufijo = el.getAttribute('data-count-suffix') || '';
        var inicio = performance.now();
        var dur = 900;
        var paso = function (ahora) {
          var t = Math.min((ahora - inicio) / dur, 1);
          var suave = 1 - Math.pow(1 - t, 3);
          el.textContent = formatea(Math.round(destino * suave)) + sufijo;
          if (t < 1) requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
        ioNum.unobserve(el);
      });
    }, { threshold: 0.5 });
    Array.prototype.forEach.call(contadores, function (el) { ioNum.observe(el); });
  }

  /* ---------- 5. Monto «otro» en el formulario de donación ---------- */
  document.querySelectorAll('.donate input[name="otro"]').forEach(function (input) {
    input.addEventListener('input', function () {
      var grupo = input.closest('fieldset');
      if (!grupo) return;
      if (input.value) {
        grupo.querySelectorAll('input[type=radio]').forEach(function (r) { r.checked = false; });
      }
    });
  });
})();
