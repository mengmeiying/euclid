// slider in Hero section
let mySwiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

// accordion in FAQ section
new Accordion('.accordion', {
  elementClass: 'list__item',
  triggerClass: 'faq__button',
  panelClass: 'content', 
  activeClass: 'list__item--active'
});

// tabs in How we work section 
let tabsBtns = document.querySelectorAll('.work__steps-link');
let tabsItems = document.querySelectorAll('.work__cards-item');

tabsBtns.forEach( function( element ) {
  element.addEventListener( 'click', function( e ) {
    const path = e.currentTarget.dataset.path;

    tabsBtns.forEach( function ( btn ) {
      btn.classList.remove('work__steps-link--active');
    })
    e.currentTarget.classList.add('work__steps-link--active');

    tabsItems.forEach( function (el) {
      el.classList.remove('work__cards-item--active');
    })
    document.querySelector(`[data-target=${path}]`).classList.add('work__cards-item--active');
  })
})

// search form 

const searchForm = document.querySelector('.search-form');
const searchFormOpenButton = document.querySelector('.nav__button');
const searchFormCloseButton = document.querySelector('.search-form__close');

searchFormOpenButton.addEventListener('click', function() {
  searchForm.classList.add('search-form--active');
})

searchFormCloseButton.addEventListener('click', function() {
  searchForm.classList.remove('search-form--active');
})

// burger menu

const burgerOpen = document.querySelector('.menu__button');
const burgerClose = document.querySelector('.nav__close-button');
const menu = document.querySelector('.nav__wrapper');

burgerOpen.addEventListener('click', function() {
  menu.classList.add('nav__wrapper--active');
})

burgerClose.addEventListener('click', function() {
  menu.classList.remove('nav__wrapper--active');
})

//tooltip 

tippy('#about-tippy', {
  content: 'интерактивный проект, который создан без кода, с целью проверки концепции перед запуском'
})

//form validation

const validate = new window.JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF9900',
  },
});

validate
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Поле Имя должно быть заполнено',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Поле E-mail должно быть заполнено',
    },
    {
      rule: 'email',
      errorMessage: 'Email некорректный',
    },
  ])
  .addField('#agreed', [
    {
      rule: 'required'
    }
  ]);