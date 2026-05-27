//Botón//
const boton = document.getElementById('theme-toggle');

boton.addEventListener('click', () => {
  // Cambio de color
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    // Si tiene la clase= modo oscuro 
    boton.textContent = " ☀ Light mode";
  } else {
    // Si no la tiene,modo claro
    boton.textContent = " ⏾ Dark mode";
  }
});