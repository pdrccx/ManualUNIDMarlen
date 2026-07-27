/* ===========================================================
   UNID · Manual de Nuevo Ingreso — Interactividad
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar: cambia estilo al hacer scroll ---- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---- Menú móvil (hamburguesa) ---- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  /* ---- Acordeón de procesos ---- */
  document.querySelectorAll('.acc-head').forEach(head => {
    head.addEventListener('click', () => {
      const item = head.parentElement;
      const body = head.nextElementSibling;
      const isOpen = item.classList.contains('open');

      // Cierra los demás
      document.querySelectorAll('.acc-item.open').forEach(o => {
        if (o !== item) {
          o.classList.remove('open');
          o.querySelector('.acc-body').style.maxHeight = null;
        }
      });

      // Alterna el actual
      item.classList.toggle('open', !isOpen);
      body.style.maxHeight = isOpen ? null : body.scrollHeight + 'px';
    });
  });

  /* ---- Animaciones reveal al hacer scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

});