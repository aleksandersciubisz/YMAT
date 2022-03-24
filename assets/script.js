// cookies banner
const cookieContainer = document.querySelector('.cookies')
const cookieButton = document.querySelector('.cookie-btn')

cookieButton.addEventListener('click', () => {
  cookieContainer.classList.remove('active')
  localStorage.setItem('cookieBannerDisplayed', 'true')
})

setTimeout(() => {
  if (!localStorage.getItem('cookieBannerDisplayed')) {
    cookieContainer.classList.add('active')
  }
})
