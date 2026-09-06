// Menu movil accesible
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    burger.setAttribute('aria-expanded', String(!open));
    burger.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  });
}
// Monto "otro" en el formulario de donacion
document.querySelectorAll('.donate input[name="otro"]').forEach((input) => {
  input.addEventListener('input', () => {
    const radios = input.closest('fieldset').querySelectorAll('input[type=radio]');
    if (input.value) radios.forEach((r) => (r.checked = false));
  });
});
