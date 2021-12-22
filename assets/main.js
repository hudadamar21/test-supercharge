
AOS.init({
  duration: 500,
  once: true,
});

const navbar = document.querySelector('.navbar');
const icon = document.querySelector('#si_icon');
const navItem = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-items a');
const menu = document.querySelector('#menu');

const containerHeight = 620

document.addEventListener('scroll', () => {

  // jika scroll y diatas 500, ubah background menjadi putih dan text menjadi primary purple
  if(window.scrollY > containerHeight) {
    navbar.classList.add('bg-white/80', 'backdrop-blur')
    navbar.classList.remove('bg-transparent')
    icon.classList.add('opacity-100')
    icon.classList.remove('opacity-0')
    menu.classList.remove('text-white')
    addRemoveLinkClass('add')
    
    // jika scroll y diatas 0, ubah background menjadi hitam dan text putih
  } else if (window.scrollY > 0){
    navbar.classList.add('bg-transparent', 'backdrop-blur')
    navbar.classList.remove('bg-white/80')
    icon.classList.add('opacity-0')
    icon.classList.remove('opacity-100')
    if (!navItem.classList.contains('open')) {
      menu.classList.add('text-white')
    }
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

const menuIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--dashicons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M3 11h14V9H3v2zm0 5h14v-2H3v2zM3 4v2h14V4H3z" fill="currentColor"></path></svg>
`

const closeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" fill="currentColor"></path></svg>
`


// Toggle Open Menu When Mobile View 
menu.addEventListener('click', (e) => {
  e.stopPropagation()
  navItem.classList.toggle('open')
  if(navItem.classList.contains('open')) {
    menu.innerHTML = closeIcon
    if(window.scrollY >= 0 && window.scrollY <= containerHeight) {
      menu.classList.remove('text-white')
    }
  } else {
    menu.innerHTML = menuIcon
    if(window.scrollY >= 0 && window.scrollY <= containerHeight) {
      menu.classList.remove('text-white')
    }
  }
})

// Share this label 
const sharethisButton = document.querySelector('.sharethis-button');
const sharethis = document.querySelector('.sharethis');

sharethisButton.addEventListener('click', (e) => {
  e.stopPropagation()
  sharethis.classList.toggle('-top-full')
  sharethis.classList.toggle('top-0')
})

sharethis.addEventListener('click', e => e.stopPropagation())

// Handle Clide Outside
document.addEventListener('click', (e) => {

  // Click Outside Menu to Close Menu
  if (navItem.classList.contains('open') && e.target !== navItem) {
    navItem.classList.remove('open')
    menu.innerHTML = menuIcon
    if (window.scrollY >= 0 && window.scrollY <= containerHeight) {
      menu.classList.add('text-white')
    }
  }

  // Click Outside Menu to Sharethis 
  if(!sharethis.classList.contains('-top-full') && e.target !== sharethis) {
    sharethis.classList.add('-top-full')
    sharethis.classList.remove('top-0')
  }

})