'use strict'

class Slider {
  constructor(sliderContainer) {
    this.sliderContainer = sliderContainer // Главный контейнер слайдера

    this.sliderScreen = sliderContainer.querySelector('.slider__screen') // Экран слайдера (в нём лежат элементы и он двигается)

    this.sliderElements =
      sliderContainer.getElementsByClassName('slider__element') // Перебираемый объект элементов слайдера

    this.leftButton = sliderContainer.querySelector('.slider__button_left')

    this.rightButton = sliderContainer.querySelector('.slider__button_right')

    this.currentSlide = 0 // Текущий слайд (нужен для расчёта ширины сдвига)

    // Расчет ширин

    this.slideGap = +window.getComputedStyle(this.sliderScreen).gap.slice(0, 2) // Правый отступ элементов

    this.transformWidth = 0 // Кумулятивный размер, на который будет сдвигаться слайдер

    this.maxWidth = 0 // Максимальная ширина, состоящая из всех элементов с отступами

    this.isEnd = false
    this.isStart = true

    for (let item of this.sliderElements) {
      this.maxWidth += item.getBoundingClientRect().width + this.slideGap
    }

    this.maxWidth -= this.slideGap // Максимальная ширина, состоящая из всех элементов без последнего отступа
    this.WidthRemainder = this.maxWidth // Будет высчитываться остаток ширины слайдера, который еще не был пролистан

    this.sliderScreenWidth = this.sliderScreen.clientWidth // Узнаем ширину рабочей области слайдера

    this.leftButton.addEventListener('click', () => {
      this.toLeft()
    })
    this.rightButton.addEventListener('click', () => {
      this.toRight()
    })
  }

  getMaxShift() {
    // Отдаёт максимальное расстояние на которое может быть смещён слайдер
    let slideScreenWidth = this.sliderScreen.clientWidth
    let maxShift = this.maxWidth - slideScreenWidth
    return -maxShift
  }

  getRemainderOfSliderWidth(currentSlideWidth, side) {
    if (side == 'right') {
      this.WidthRemainder -= currentSlideWidth + this.slideGap
    } else {
      this.WidthRemainder += currentSlideWidth + this.slideGap
    }
    return this.WidthRemainder
  }

  getTransformWidth(side) {
    console.log('считалка начало', this.transformWidth)
    if (side === 'right') {
      this.transformWidth -=
        this.sliderElements[this.currentSlide].getBoundingClientRect().width +
        this.slideGap
      console.log(this.currentSlide)
    } else {
      this.transformWidth +=
        this.sliderElements[this.currentSlide].getBoundingClientRect().width +
        this.slideGap
    }
    console.log('считалка конец', this.transformWidth)
  }

  toLeft() {
    console.log('лево', this.transformWidth)
    if (!this.isStart) {
      this.currentSlide -= 1
      this.getTransformWidth('left')
      this.isEnd = false
    }

    if (!this.isStart && this.currentSlide > 0 && this.transformWidth <= 0) {
      this.getRemainderOfSliderWidth(
        this.sliderElements[this.currentSlide - 1].getBoundingClientRect()
          .width,
        'left'
      )
      this.sliderScreen.style.transform = `translateX(${this.transformWidth}px)`
    }
    if (this.transformWidth >= 0) {
      this.isStart = true
      this.sliderScreen.style.transform = `translateX(0px)`
      this.transformWidth = 0
      this.currentSlide = 0
      this.WidthRemainder = this.maxWidth
    }
  }

  toRight() {
    console.log('право', this.transformWidth)
    if (!this.isEnd) {
      this.getTransformWidth('right')
      this.isStart = false
      this.currentSlide += 1
    }

    if (
      !this.isEnd &&
      this.getRemainderOfSliderWidth(
        this.sliderElements[this.currentSlide].getBoundingClientRect().width,
        'right'
      ) > this.sliderScreenWidth
    ) {
      this.sliderScreen.style.transform = `translateX(${this.transformWidth}px)`
    } else {
      this.sliderScreen.style.transform = `translateX(${this.getMaxShift()}px)`
      this.isEnd = true
      this.currentSlide = this.sliderElements.length
      this.transformWidth = this.getMaxShift()
    }
  }
}

let firstSlider = new Slider(document.querySelector('.portfolio__slider'))
let secondSlider = new Slider(document.querySelector('.styles-card__slider'))
let thirdSlider = new Slider(document.querySelector('.reviews__slider'))
