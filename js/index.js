//menu
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-btn-active");
  menu.classList.toggle("menu-active");
});
menu.addEventListener("click", (event) => {
  menuBtn.classList.toggle("menu-btn-active");
  menu.classList.toggle("menu-active");
});

//to-top
let toTop = document.getElementById("to-top");
let home = document.getElementById("home");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
toTop.addEventListener("click", (e) => {
  e.preventDefault();
  home.scrollIntoView({ behavior: "smooth" });
});

//slider
$(".carousel").carousel({
  interval: 5000,
});

//advantages
const advBtn = document.querySelectorAll(".card-adv_img");

advBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let advInfo = item.previousElementSibling.lastElementChild;
    advInfo.classList.toggle("adv-info__active");
    item.classList.toggle("adv-item__active");
  });
});

//map
ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [53.889865291208594, 27.575227855944892],
        zoom: 18,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: 'ООО "Сервис"',
        balloonContent: 'ООО "Сервис"',
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../image/marker.png",
        iconImageSize: [75, 102],
      }
    );
  myMap.geoObjects.add(myPlacemark);
});
