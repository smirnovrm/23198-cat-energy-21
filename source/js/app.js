let menu = document.querySelector(".main-menu");
menu.classList.remove("main-menu--nojs");
let menuToogle = document.querySelector(".page-header__toogle");
menuToogle.classList.remove("page-header__toogle--nojs");

let mapImage = document.querySelector(".map__image");
mapImage.classList.remove("map__image--nojs");
let mapIframe = document.querySelector(".map__iframe");
mapIframe.classList.remove("map__iframe--nojs");

menuToogle.addEventListener("click", function(){
  this.classList.toggle("page-header__toogle--open");
  menu.classList.toggle("main-menu--nojs");
  // menu.classList.toggle("main-menu--opened");
});
