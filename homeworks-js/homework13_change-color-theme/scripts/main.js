const btn = document.querySelector('.theme__button')
const theme = document.querySelector('html')
const currentTheme = localStorage.getItem('theme')

function setTheme(name){
  theme.setAttribute('data-theme', name)
  localStorage.setItem('theme', name)
}

if (currentTheme) {
  theme.setAttribute('data-theme', currentTheme)
} else {
  setTheme('light')
}

btn.addEventListener('click', () => {
  if (theme.getAttribute('data-theme') === 'light') {
    setTheme('green')
  } else if (theme.getAttribute('data-theme') === 'green') {
    setTheme('light')
  } else {
    setTheme('light')
  }
})