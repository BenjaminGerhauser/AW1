const toggleButton = document.getElementById('boton-tema');
const currentTheme = localStorage.getItem('tema')|| 'oscuro';
const buttonImage = document.getElementById('boton-imagen');

// Establecer el tema al cargar la página
document.documentElement.setAttribute('data-theme', currentTheme);


if (currentTheme === 'oscuro') {
  buttonImage.src = 'recursos/imagenes/logos/sidebar/bx-sun.svg';
} else {
  buttonImage.src = 'recursos/imagenes/logos/sidebar/bx-moon.svg';
}

toggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'claro') {
    document.documentElement.setAttribute('data-theme', 'oscuro');
    localStorage.setItem('tema', 'oscuro');  // Guarda la preferencia en localStorage
  } else {
    document.documentElement.setAttribute('data-theme', 'claro');
    localStorage.setItem('tema', 'claro'); // Guarda la preferencia en localStorage
  }
});