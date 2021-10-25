let openMenu = document.querySelector('.header-right > a');
let hamburger = document.querySelector('.hamburger-menu');
let closeMenu = document.querySelector('.hamburger-menu .close');

openMenu.addEventListener('click' , function(){
  console.log('cliccato');
  hamburger.classList.add('active');

});

closeMenu.addEventListener('click' , function(){
  console.log('cliccato il tasto chiudi');
  hamburger.classList.remove ('active');

});