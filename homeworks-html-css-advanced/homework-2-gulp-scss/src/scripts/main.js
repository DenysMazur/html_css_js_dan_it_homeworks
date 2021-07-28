const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('is--active');
  document.querySelector('.menu').classList.toggle('header__menu--hidden')
  menuBtn.classList.add('is--clicked');
  setTimeout(function(){
    menuBtn.classList.remove('is--clicked');
  }, 300);
});