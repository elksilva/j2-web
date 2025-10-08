console.log("✅ main.js está cargado correctamente");

// --- Menú responsive ---
const btnMenu = document.getElementById('btnMenu');
const menuMovil = document.getElementById('menuMovil');

btnMenu.addEventListener('click', () => {
  if (menuMovil.classList.contains('opacity-0')) {
    menuMovil.classList.remove('opacity-0', 'max-h-0');
    menuMovil.classList.add('opacity-100', 'max-h-screen');
  } else {
    menuMovil.classList.add('opacity-0', 'max-h-0');
    menuMovil.classList.remove('opacity-100', 'max-h-screen');
  }
});

// Inicializar AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800, // duración de la animación (ms)
    once: true,    // se anima una sola vez
    offset: 100,   // distancia antes de activarse
  });
});
