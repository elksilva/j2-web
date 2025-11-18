// --- Menú responsive ---
const btnMenu = document.getElementById('btnMenu');
const menuMovil = document.getElementById('menuMovil');

btnMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // evita que cierre al hacer clic en el botón
  if (menuMovil.classList.contains('opacity-0')) {
    menuMovil.classList.remove('opacity-0', 'max-h-0');
    menuMovil.classList.add('opacity-100', 'max-h-screen');
  } else {
    menuMovil.classList.add('opacity-0', 'max-h-0');
    menuMovil.classList.remove('opacity-100', 'max-h-screen');
  }
});

// --- Cerrar cuando se hace clic fuera del menú ---
document.addEventListener('click', (e) => {
  // si hace clic fuera del menú y fuera del botón
  if (!menuMovil.contains(e.target) && !btnMenu.contains(e.target)) {
    // si está abierto, cerrarlo
    if (menuMovil.classList.contains('opacity-100')) {
      menuMovil.classList.add('opacity-0', 'max-h-0');
      menuMovil.classList.remove('opacity-100', 'max-h-screen');
    }
  }
});

// Inicializar AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });
});
