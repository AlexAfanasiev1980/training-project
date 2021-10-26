const headerLink = document.querySelector(".header__link");
const buttonBackground = document.querySelector(".button__background");

headerLink.addEventListener('mouseenter', function () {
  buttonBackground.classList.add("button__background_active")
})

headerLink.addEventListener('mouseleave', function () {
  buttonBackground.classList.remove("button__background_active")
})