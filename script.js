let lightModeIcon = document.querySelector('#lightMode-icon');

lightModeIcon.onclick = () => {
  if (lightModeIcon.classList.contains('bx-moon')) {
    lightModeIcon.classList.remove('bx-moon');
    lightModeIcon.classList.add('bx-sun');
  } else {
    lightModeIcon.classList.remove('bx-sun');
    lightModeIcon.classList.add('bx-moon');
  }
  document.body.classList.toggle('light-mode');
};