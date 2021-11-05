const buttonBackground = document.querySelector(".button__background");
const slidesTitle = document.querySelectorAll(".slider-road__title");
const slidesText = document.querySelectorAll(".slider-road__text");
const slidesIcon = document.querySelectorAll(".slider-road__icon");
const buttonRight = document.querySelector(".slider-road__button_direction_right");
const buttonLeft = document.querySelector(".slider-road__button_direction_left");
const slidesImage = document.querySelectorAll(".slider-road__image-item");
const slidesContainer = document.querySelector(".slider-road__image-container");
const buttonBicycles = document.querySelectorAll(".bicycles__list-item");
const buttonBic = document.querySelectorAll(".bicycles__button");
const slidesBicycles = document.querySelectorAll(".bicycles__slides")
const inputEmail = document.querySelector(".footer__email");
const inputSubmit = document.querySelector(".footer__submit");
const buttonSwitch = document.querySelectorAll(".footer__switch-container");
const switchTheme = document.querySelectorAll(".footer__switch");
const btnSlide = document.querySelectorAll(".bicycles__switch");
const btnMenu = document.querySelector(".menu__icon");
let viewport = document.querySelector(".bicycles__slides").offsetWidth;
const selectBicycles = document.querySelector(".bicycles__choice");
const popup = document.querySelector(".menu-popup");
const popupCloseButton = document.querySelector(".menu__close-icon");
const popupItem = document.querySelectorAll(".menu-popup__list-item");
let slidesWidth = slidesContainer.offsetWidth;;
window.addEventListener('resize', function() {
  slidesWidth = slidesContainer.offsetWidth;
  if (slidesWidth>922) {
    slidesContainer.style.left = -690 + "px";
  } else {
    slidesContainer.style.left = -302 + "px";
  }
  if (popupOpenIndex === 1) {
    popupOpen();
  }
});
// slidesContainer.offsetWidth;
let slideIndex = 1;

//Функция слайдера видов шоссе
let slidesRoad = [];
for (let i = 0; i < slidesImage.length; i++) {
  // Добавляем изображение из слайда 
  slidesRoad[i] = slidesImage[i].querySelector('img');
  // Удаляем слайд
  slidesImage[i].remove();
}

// Номер слайда
// let step = 0;
// Позиция сайда
let position = 1;
 
// Функция для первоначальной отрисовки сlайда
function  pointSlide(n) {
    // Создаём элемент слайда
    let slide = document.createElement("li");
    // Добавляем касс slide новому элементу
    slide.classList.add("slider-road__image-item");
    // Добавляем дочерний элемент контент слайда
    if (n!==slidesRoad.length) {
      slide.appendChild(slidesRoad[n]);
      slidesContainer.append(slide);
    } else {
      n--
      let image = document.createElement("img");
      image.src = slidesRoad[n].src;
      image.classList.add("slider-road__image");
      slide.appendChild(image);
      slidesContainer.prepend(slide);
    }

}

for (let i = 0; i <= slidesRoad.length; i++) {
  // Запускаем функцию первоначальной отрисовки слайдов 
  pointSlide(i);
}

if (slidesWidth>922) {
  slidesContainer.style.left = -690 + "px";
} else {
  slidesContainer.style.left = -302 + "px";
}
//конец функции первоначальной отрисовки слайдов

//функция движения слайда вправо
function right() {
  buttonRight.removeEventListener('click', right);
  if (position+1>slidesRoad.length) {
    position = 1;
  } else {
    position++;
  }
  showSlideList(position);
  //сдвигаем слайд вправо
  if (slidesWidth>922) {
    slidesContainer.style.left = -690 + (-690) + "px";
  } else {
    slidesContainer.style.left = -302 + (-302) + "px";
  }

  let slide = document.createElement("li");
  slide.classList.add("slider-road__image-item");
  let image = document.createElement("img");
  if (position>1) {
    image.src = slidesRoad[position-2].src;
  } else {
    image.src = slidesRoad[slidesRoad.length-1].src;
  }
  image.classList.add("slider-road__image");
  slide.appendChild(image);
  slidesContainer.appendChild(slide);
  //удаляем первый слайд
  let slidesImage2 = document.querySelectorAll(".slider-road__image-item");
  slidesImage2[0].remove();
  //устанавливаем первоначальный отступ
  if (slidesWidth>922) {
    slidesContainer.style.left = -690 + "px";
  } else {
    slidesContainer.style.left = -302 + "px";
  }
  setTimeout(function () {
    buttonRight.addEventListener('click', right);
  }, 500)
}

buttonRight.addEventListener('click', right);

//конец функции движения слайда вправо

//функция движения слайда влево
function left() {
  buttonLeft.removeEventListener('click', left);
  if (position-1<1) {
    position = slidesRoad.length;
  } else {
    position--;
  }
  showSlideList(position);
  //сдвигаем слайд влево
  slidesContainer.style.left = 0 + "px";
  //добавляем слайд в начало
  let slide = document.createElement("li");
  slide.classList.add("slider-road__image-item");
  let image = document.createElement("img");
  if (position!==1) {
    image.src = slidesRoad[position-2].src;
  } else {
    image.src = slidesRoad[slidesRoad.length-1].src;
  }
  image.classList.add("slider-road__image");
  slide.appendChild(image);
  slidesContainer.prepend(slide);
  //устанавливаем первоначальный отступ
  if (slidesWidth>959) {
    slidesContainer.style.left = -690 + "px";
  } else {
    slidesContainer.style.left = -302 + "px";
  }
  //удаляем последний слайд
  let slidesImage2 = document.querySelectorAll(".slider-road__image-item");
  slidesImage2[slidesImage2.length-1].remove();
  
  
  setTimeout(function () {
    buttonLeft.addEventListener('click', left);
  }, 500)
}

buttonLeft.addEventListener('click', left);

//конец функции движения слайда влево


function showSlideList(pos) {
  for (i = 0; i < slidesTitle.length; i++) {
    slidesTitle[i].style.display = "none";
    slidesIcon[i].style.display = "none";
    slidesText[i].style.display = "none";
}
    slidesTitle[pos-1].style.display = "block";
    slidesIcon[pos-1].style.display = "block";
    slidesText[pos-1].style.display = "block";
}

function showSlides(n) {
  for (i = 0; i < slidesTitle.length; i++) {
    slidesTitle[i].style.display = "none";
    slidesIcon[i].style.display = "none";
    slidesText[i].style.display = "none";
}
    slidesTitle[n-1].style.display = "block";
    slidesIcon[n-1].style.display = "block";
    slidesText[n-1].style.display = "block";
}

showSlides(slideIndex);

//функция слайдера велосипедов

function bicyclesChoice(e) {
  for (i = 0; i < buttonBicycles.length; i++) {
    slidesBicycles[i].style.display = "none";
  }
  for (i = 0; i < buttonBicycles.length; i++) {
    buttonBicycles[i].classList.remove("bicycles__list-item_active");
  }
  slidesBicycles[e.target.id-1].style.display = "flex";
  buttonBicycles[e.target.id-1].classList.add("bicycles__list-item_active");
}

for (i = 0; i < buttonBicycles.length; i++) {
  buttonBic[i].addEventListener('click', bicyclesChoice);
}

//функция установки слайдера велосипеда по умолчанию
function showBicycles(n) {
  for (i = 0; i < buttonBicycles.length; i++) {
    slidesBicycles[i].style.display = "none";
}
    slidesBicycles[n-1].style.display = "flex";
    buttonBicycles[n-1].classList.add("bicycles__list-item_active");
}

showBicycles(slideIndex);
//конец функции слайдера велосипедов

//обработка события клика на input email
function visibilityButton() {
  inputSubmit.classList.add("footer__submit_active");
}

inputEmail.addEventListener('click', visibilityButton);

//обработа события клика на input submit
function visibilityButtonNone() {
  inputSubmit.classList.remove("footer__submit_active");
  inputEmail.value = "Круто!";
  inputEmail.style.color = "#151515";
}

inputSubmit.addEventListener('click', visibilityButtonNone);

//переключение темы
const body = document.querySelector(".page");
const menu = document.querySelector(".menu");
const text = document.querySelectorAll(".text");
const sliderRoadButton = document.querySelectorAll(".slider-road__button");
const sliderArrow = document.querySelectorAll(".slider-road__arrow");
const quoteText = document.querySelector(".quote__text");
const footer = document.querySelector(".footer");
const workoutLink =document.querySelectorAll(".workout__link");
const sun = document.querySelectorAll(".footer__sun");
const moon = document.querySelectorAll(".footer__moon");
const menuPopup = document.querySelector(".menu-popup");
const bicyckesOption = document.querySelectorAll(".bicycles__option");
let theme = "ligth";
function switchThemeDark() {
  for (let i=0; i<switchTheme.length; i++){
    switchTheme[i].classList.toggle("footer__switch_theme_dark");
  }
  if (theme === "ligth") {
    body.classList.add("page_theme_dark");
    menu.style.background = "#333";
    quoteText.classList.add("quote__text_theme_dark");
    menuPopup.classList.add("menu-popup_theme_dark");
    text.forEach(el => el.classList.add("text_theme_dark"));
    sliderRoadButton.forEach(el => el.classList.add("slider-road__button_theme_dark"));
    sliderArrow.forEach(el => el.src = "./images/arrow_white.svg");
    workoutLink.forEach(el => el.classList.add("workout__link_theme_dark"));
    buttonSwitch.forEach(el => el.classList.add("footer__switch-container_theme_dark"));
    sun.forEach(el => el.classList.add("footer__sun_theme_dark"));
    moon.forEach(el => el.classList.add("footer__sun_theme_dark"));
    bicyckesOption.forEach(el => el.classList.add("bicycles__option_theme_dark"));
    footer.classList.add("footer_theme_dark");
    if (popupOpenIndex===0) {
      btnMenu.classList.add("menu__icon_theme_dark");
    } else {
      btnMenu.classList.remove("menu__icon_type_close");
      btnMenu.classList.add("menu__close-icon_theme_dark");
    }
    // document.querySelector(".")
    theme = "dark";
  } else {
    body.classList.remove("page_theme_dark");
    menu.style.background = "#f4f4f4";
    quoteText.classList.remove("quote__text_theme_dark");
    text.forEach(el => el.classList.remove("text_theme_dark"));
    menuPopup.classList.remove("menu-popup_theme_dark");
    sliderRoadButton.forEach(el => el.classList.remove("slider-road__button_theme_dark"));
    sliderArrow.forEach(el => el.src = "./images/arrow.svg");
    footer.classList.remove("footer_theme_dark");
    workoutLink.forEach(el => el.classList.remove("workout__link_theme_dark"));
    buttonSwitch.forEach(el => el.classList.remove("footer__switch-container_theme_dark"));
    sun.forEach(el => el.classList.remove("footer__sun_theme_dark"));
    moon.forEach(el => el.classList.remove("footer__sun_theme_dark"));
    bicyckesOption.forEach(el => el.classList.remove("bicycles__option_theme_dark"));
    if (popupOpenIndex===0) {
      btnMenu.classList.remove("menu__icon_theme_dark");
    } else {
      btnMenu.classList.add("menu__icon_type_close");
      btnMenu.classList.remove("menu__close-icon_theme_dark");
    }
    theme = "ligth";
  }
}

for (let i=0; i<buttonSwitch.length; i++) {
  buttonSwitch[i].addEventListener('click', switchThemeDark);
}

//слайдер велосипедов при разрешении экрана 320px
window.onload = function () {
  for (let a=0; a<btnSlide.length; a++) {
    if (a===0) {
      btnSlide[a].classList.add("bicycles__switch_type_activ");
    } else {
      btnSlide[a].classList.remove("bicycles__switch_type_activ");
    }
  }
}

for (let i=0; i<btnSlide.length; i++) {
  btnSlide[i].addEventListener('click', function() {
    slidesBicycles[0].style.left = -(i) * viewport + "px";
    for (let a=0; a<btnSlide.length; a++) {
      if (a===i) {
        btnSlide[a].classList.add("bicycles__switch_type_activ");
      } else {
        btnSlide[a].classList.remove("bicycles__switch_type_activ");
      }
    }
  })
}

selectBicycles.addEventListener('change', (event) => {
  for (i = 0; i < buttonBicycles.length; i++) {
    slidesBicycles[i].style.display = "none";
}
    slidesBicycles[event.target.value-1].style.display = "flex";
    slidesBicycles[event.target.value-1].style.left = 0;
    for (let i=0; i<btnSlide.length; i++) {
      if (i===0) {
        btnSlide[i].classList.add("bicycles__switch_type_activ");
      } else {
        btnSlide[i].classList.remove("bicycles__switch_type_activ");
      }
    }

    for (let i=0; i<btnSlide.length; i++) {
      btnSlide[i].addEventListener('click', function() {
        slidesBicycles[event.target.value-1].style.left = -(i) * viewport + "px";
        for (let a=0; a<btnSlide.length; a++) {
          if (i===a) {
            btnSlide[a].classList.add("bicycles__switch_type_activ");
          } else {
            btnSlide[a].classList.remove("bicycles__switch_type_activ");
          }
        }
      })
    }
});

window.addEventListener('resize', ()=>{
  viewport = document.querySelector(".bicycles__slides").offsetWidth;
})

//раскрытие и закрытие попапа
let popupOpenIndex = 0;
function popupOpen() {
  if (popupOpenIndex === 0) {
    popup.style.display = "block";
    if (theme === "dark") {
      btnMenu.classList.add("menu__close-icon_theme_dark");
      btnMenu.classList.remove("menu__icon_type_close");
    } else {
      btnMenu.classList.add("menu__icon_type_close");
    }
    popupOpenIndex = 1;
  } else {
    popup.style.display = "none";
    if (theme === "dark") {
      btnMenu.classList.remove("menu__close-icon_theme_dark");
      btnMenu.classList.add("menu__icon_theme_dark");
    } else {
      btnMenu.classList.remove("menu__icon_type_close");
      btnMenu.classList.remove("menu__icon_theme_dark");
    }
    popupOpenIndex = 0;
  }
}

btnMenu.addEventListener('click', popupOpen);
for (let i=0; i<popupItem.length; i++) {
  popupItem[i].addEventListener('click', popupOpen);
}