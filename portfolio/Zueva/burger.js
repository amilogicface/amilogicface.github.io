'use strict'
const burger = document.querySelector('.burger')
const mainNavigation = document.querySelector('.main-nav__list')

function showMainNavigation() {
  mainNavigation.classList.toggle('main-nav__list_show')
  burger.classList.toggle('burger_active')
}

function hideMainNavigation() {
  mainNavigation.classList.remove('main-nav__list_show')
  burger.classList.remove('burger_active')
}

burger.addEventListener('click', function () {
  showMainNavigation()
})

addEventListener('resize', function () {
  hideMainNavigation()
})

document.addEventListener('click', function (e) {
  if (!burger.contains(e.target)) {
    hideMainNavigation()
    burger.classList.remove('burger_active')
  }
})

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    hideMainNavigation()
    burger.classList.remove('burger_active')
  }
})
