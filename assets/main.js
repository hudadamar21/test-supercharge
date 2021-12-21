
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
const sharethisContainer = document.querySelector('.sharethis-container');
const sharethisLabel = document.querySelector('.sharethis-label');

const shareIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icomoon-free w-8 h-8 fill-primary-purple"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path d="M13.5 11c-.706 0-1.342.293-1.797.763L4.969 8.396a2.46 2.46 0 0 0 0-.792l6.734-3.367a2.5 2.5 0 1 0-.672-1.341L4.297 6.263a2.5 2.5 0 1 0 0 3.474l6.734 3.367A2.5 2.5 0 1 0 13.5 11z"></path></svg>
`

sharethisLabel.addEventListener('click', (e) => {
  e.stopPropagation()
  sharethisContainer.classList.toggle('open')
  if(sharethisContainer.classList.contains('open')) {
    sharethisLabel.textContent = `Share this to :`
  } else {
    sharethisLabel.innerHTML = shareIcon
  }
})


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
  if(sharethisContainer.classList.contains('open') && e.target !== sharethisContainer) {
    sharethisContainer.classList.remove('open')
    sharethisLabel.innerHTML = shareIcon
  }

})