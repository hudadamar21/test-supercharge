import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

AOS.init({
  duration: 500,
  once: true,
});


new Typed('#typed', {
  strings: ['business', 'interactive'],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
  backDelay: 2000
});


const navbar = document.querySelector('.navbar');
const icon = document.querySelector('#si_icon');
const navItem = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-items a');
const menu = document.querySelector('#menu');
const menuIcon = menu.querySelector('img');

const containerHeight = 620

document.addEventListener('scroll', () => {

  // jika scroll y diatas 500, ubah background menjadi putih dan text menjadi primary purple
  if(window.scrollY > containerHeight) {
    navbar.classList.add('bg-white/80', 'backdrop-blur')
    navbar.classList.remove('bg-black/50')
    icon.classList.add('opacity-100')
    icon.classList.remove('opacity-0')
    menuIcon.classList.remove('invert')
    addRemoveLinkClass('add')

  // jika scroll y diatas 0, ubah background menjadi hitam dan text putih
  } else if (window.scrollY > 0){
    navbar.classList.add('bg-black/50', 'backdrop-blur')
    navbar.classList.remove('bg-white/80')
    icon.classList.add('opacity-0')
    icon.classList.remove('opacity-100')
    menuIcon.classList.add('invert')
    addRemoveLinkClass('remove')

  // jika scroll y adalah 0, ubah hapus background 
  } else {
    navbar.classList.remove('bg-black/50', 'backdrop-blur')
    addRemoveLinkClass('remove')
  }
})

function addRemoveLinkClass(mode) {
  navLinks.forEach(link => {
    link.classList[mode]('text-primary-purple', 'hover:text-secondary-purple')
  })
}


// Toggle Open Menu When Mobile View 
menu.addEventListener('click', (e) => {
  e.stopPropagation()
  navItem.classList.toggle('open')
  if(navItem.classList.contains('open')) {
    menuIcon.src = './assets/icons/close.svg'
    if(window.scrollY >= 0 && window.scrollY <= containerHeight) {
      menuIcon.classList.remove('invert')
    }
  } else {
    menuIcon.src = './assets/icons/menu.svg'
    if(window.scrollY >= 0 && window.scrollY <= containerHeight) {
      menuIcon.classList.add('invert')
    }
  }
})

// Click Outside Menu to Close Menu
document.body.addEventListener('click', (e) => {
  if(navItem.classList.contains('open') && e.target !== navItem) {
    navItem.classList.remove('open')
    menuIcon.src = './assets/icons/menu.svg'
    if (window.scrollY >= 0 && window.scrollY <= containerHeight) {
      menuIcon.classList.add('invert')
    }
  }
})