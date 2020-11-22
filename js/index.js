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
