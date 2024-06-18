'use strict'
const burger = document.querySelector('.burger')
const mainNavigation = document.querySelector('.main-nav__list')

function showMainNavigation() {
  mainNavigation.classList.toggle('main-nav__list_show')
}

function hideMainNavigation() {
  mainNavigation.classList.remove('main-nav__list_show')
}

burger.addEventListener('click', function () {
  showMainNavigation()
})

addEventListener('resize', function () {
  hideMainNavigation()
})

document.addEventListener('click', function (e) {
  if (!(e.target === burger || e.target.parentNode === burger)) {
    hideMainNavigation()
  }
})
