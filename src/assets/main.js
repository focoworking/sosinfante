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
  /* ---------- 6. Selector de idioma flotante ----------
     Cerrado muestra solo la bandera del idioma activo. Al abrirlo aparecen
     los otros dos. En la primera visita desde fuera del sitio, si el idioma
     del dispositivo es uno de los otros dos, se cambia solo una vez y se
     recuerda la elección. Quien elige a mano manda siempre. */
  (function () {
    var caja = document.querySelector('.lang-float');
    if (!caja) return;

    var chip = caja.querySelector('.lang-chip');
    var actual = caja.getAttribute('data-actual');
    var alternativas = [];
    try { alternativas = JSON.parse(caja.getAttribute('data-idiomas') || '[]'); } catch (e) { alternativas = []; }

    var CLAVE = 'sosinfante:idioma';
    var guardar = function (codigo) {
      try { localStorage.setItem(CLAVE, codigo); } catch (e) { /* modo privado */ }
    };
    var leer = function () {
      try { return localStorage.getItem(CLAVE); } catch (e) { return null; }
    };

    /* -- abrir y cerrar -- */
    var abrir = function (si) {
      caja.classList.toggle('abierto', si);
      chip.setAttribute('aria-expanded', si ? 'true' : 'false');
    };
    chip.addEventListener('click', function () {
      abrir(!caja.classList.contains('abierto'));
    });
    document.addEventListener('click', function (e) {
      if (!caja.contains(e.target)) abrir(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') abrir(false);
    });

    /* -- elección manual: se recuerda y gana sobre la detección -- */
    caja.querySelectorAll('[data-idioma]').forEach(function (a) {
      a.addEventListener('click', function () { guardar(a.getAttribute('data-idioma')); });
    });

    /* -- autodetección, solo al entrar desde fuera y solo una vez -- */
    var destinoDe = function (codigo) {
      for (var i = 0; i < alternativas.length; i++) {
        if (alternativas[i].c === codigo) return alternativas[i].u;
      }
      return null;
    };

    var interno = document.referrer && document.referrer.indexOf(location.origin) === 0;
    if (interno || navigator.webdriver) return;

    var elegido = leer();
    if (!elegido) {
      var lista = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ''];
      for (var i = 0; i < lista.length && !elegido; i++) {
        var base = String(lista[i]).toLowerCase().split('-')[0];
        if (destinoDe(base)) elegido = base;
      }
      if (elegido) guardar(elegido);
    }

    if (!elegido || elegido === actual) return;
    var destino = destinoDe(elegido);
    if (destino && destino !== location.pathname) location.replace(destino);
  })();
  /* ---------- 7. Botón de volver arriba ----------
     Aparece cuando ya se bajó una pantalla y lleva al inicio con
     desplazamiento suave, respetando quien pidió menos movimiento. */
  (function () {
    var boton = document.querySelector('.subir');
    if (!boton) return;

    var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var pendiente = false;

    var revisar = function () {
      boton.classList.toggle('visible', window.scrollY > window.innerHeight * 0.6);
      pendiente = false;
    };

    window.addEventListener('scroll', function () {
      if (pendiente) return;
      pendiente = true;
      window.requestAnimationFrame(revisar);
    }, { passive: true });
    revisar();

    boton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: sinMovimiento ? 'auto' : 'smooth' });
      // Devuelve el foco al principio para quien navega con teclado.
      var primero = document.querySelector('.skip') || document.body;
      if (primero.focus) primero.focus({ preventScroll: true });
    });
  })();
})();
