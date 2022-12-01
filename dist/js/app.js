"use strict";

//изменяю активную ссылку меню
var menuListArr = document.querySelectorAll('.menu-list__link');
document.querySelector('.menu-list').addEventListener('click', function (event) {
  if (event.target.classList.contains('menu-list__link')) {
    menuListArr.forEach(function (element) {
      return element.classList.remove('menu-list__link_active');
    });
    event.target.classList.add('menu-list__link_active');
  }
});

//изменяю активную ссылку в языках
var languagesArr = document.querySelectorAll('.languages__element');
document.querySelector('.languages').addEventListener('click', function (event) {
  if (event.target.classList.contains('languages__element')) {
    languagesArr.forEach(function (element) {
      return element.classList.remove('languages__element_active');
    });
    event.target.classList.add('languages__element_active');
  }
});

//навешиваю обработчики на слайдер
var nextEl = document.querySelector('.next-slider');
var previousEl = document.querySelector('.previous-slider');
var playersWrapEl = document.querySelector('.players-wrap');

//значение единицы margin-left
var positionEl = -680;
var movingEl = 1050;

//для подсчета количества слайдов
var x = 1;

//узнаю количество слайдов для включения/выключения кнопок
var slidesArr = document.querySelectorAll('.slider-list__element').length;
function enabled() {
  if (x >= slidesArr - 1) {
    nextEl.classList.add('slider-disabled');
  } else {
    nextEl.classList.remove('slider-disabled');
  }
  if (x <= 0) {
    previousEl.classList.add('slider-disabled');
  } else {
    previousEl.classList.remove('slider-disabled');
  }
}

//функция для установки активного слайда
var sliderArr = document.querySelectorAll('.slider-list__element');
var sliderListEl = document.querySelector('.slider-list');
function changeActiveSlider(number) {
  sliderArr.forEach(function (element) {
    return element.classList.remove('slider-list__element_active');
  });
  sliderArr[number].classList.add('slider-list__element_active');
}
function nextSlider() {
  x++;
  positionEl = positionEl - movingEl;
  playersWrapEl.style.marginLeft = positionEl + 'px';
  console.log(x);
  enabled();
  changeActiveSlider(x);
}
function previousSlider() {
  x--;
  positionEl = positionEl + movingEl;
  playersWrapEl.style.marginLeft = positionEl + 'px';
  console.log(x);
  enabled();
  changeActiveSlider(x);
}
nextEl.addEventListener('click', nextSlider);
previousEl.addEventListener('click', previousSlider);