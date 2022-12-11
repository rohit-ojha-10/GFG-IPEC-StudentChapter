const faq = document.getElementsByClassName('faqBx');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-links');

navLink.forEach((n) => n.addEventListener('click', closeMenu));
hamburger.addEventListener('click', mobileMenu);

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

$(window).scroll(function () {
  let isDesktop = $(document).width() > 842;
  if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background', 'black');
    $('.navbar').css('z-index', '2');
    $('.navbar').css('width', '100%');
    $('.logo').addClass('scrollUp');
    if (isDesktop) $('.nav-items').css('background-color', 'transparent');
  } else {
    $('.navbar').css('background', 'transparent');
    $('.logo').removeClass('scrollUp');
    $('.navbar').css('width', '90%');
    if (isDesktop) $('.nav-items').css('background-color', '#25282c');
  }
});
