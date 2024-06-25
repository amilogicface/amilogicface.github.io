'use strict'
function getScrollbarWidth() {
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const inner = document.createElement('div')
  outer.appendChild(inner)

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  document.body.removeChild(outer)

  return scrollbarWidth
}

let scrollBarWidth = getScrollbarWidth()
const modal = document.getElementsByClassName('modal')[0]

let form = document.getElementsByClassName('contacts-card__form-placeholder')[0]
let formClone = form.cloneNode(true)

document.body.addEventListener('click', e => {
  let target = e.target
  if (
    target.classList.contains('button') &&
    !target.classList.contains('connection-form__button')
  ) {
    modal.classList.add('modal_show')
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = `${scrollBarWidth}px`
  }
})

modal.addEventListener('transitionend', () => {
  if (!modal.classList.contains('modal_show')) {
    document.body.style.overflow = ''
    document.body.style.marginRight = ''
  }
})
