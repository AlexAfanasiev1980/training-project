const headerLink = document.querySelector(".header__link");
const buttonBackground = document.querySelector(".button__background");
const slidesTitle = document.querySelectorAll(".slider-road__item");
const slidesIcon = document.querySelectorAll(".slider-road__icon");
const buttonRight = document.querySelector(".slider-road__button_direction_right");
const buttonLeft = document.querySelector(".slider-road__button_direction_left");
const slidesImage = document.querySelectorAll(".slider-road__image-item");
const slidesContainer = document.querySelector(".slider-road__image-container");
const buttonBicycles = document.querySelectorAll(".bicycles__list-item");
const slidesBicycles = document.querySelectorAll(".bicycles__slides")
let slideIndex = 1;

headerLink.addEventListener('mouseenter', function () {
  buttonBackground.classList.add("button__background_active")
})

headerLink.addEventListener('mouseleave', function () {
  buttonBackground.classList.remove("button__background_active")
})

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
 
// Функция для отрисовки сlайда
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

slidesContainer.style.left = -690 + "px";
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
  slidesContainer.style.left = -690 + (-690) + "px";

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
  slidesContainer.style.left = -690 + "px";
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
  //сдвигаем слайд вправо
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
  slidesContainer.style.left = -690 + "px";
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
}
    slidesTitle[pos-1].style.display = "block";
    slidesIcon[pos-1].style.display = "block";
}

function showSlides(n) {
  for (i = 0; i < slidesTitle.length; i++) {
    slidesTitle[i].style.display = "none";
    slidesIcon[i].style.display = "none";
}
    slidesTitle[n-1].style.display = "block";
    slidesIcon[n-1].style.display = "block";
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
  console.log(e.target.id);

}

for (i = 0; i < buttonBicycles.length; i++) {
  buttonBicycles[i].addEventListener('click', bicyclesChoice);
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






