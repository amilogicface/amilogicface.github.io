'use strict'
let visibleChecker = false
const modal = document.getElementsByClassName('modal')[0]

let form = document.getElementsByClassName('contacts-card__form-placeholder')[0]
let formClone = form.cloneNode(true)

document.body.addEventListener('click', e => {
  let target = e.target
  if (
    target.classList.contains('button') &&
    !target.classList.contains('connection-form__button')
  ) {
    visibleChecker = true
    modal.classList.add('modal_show')
    document.body.style.overflow = 'hidden'
  } else {
    modal.classList.remove('modal_show')
    modal.addEventListener('transitionend', () => {
      if (!visibleChecker) {
        document.body.style.overflow = ''
      }
    })
    visibleChecker = false
  }
})
