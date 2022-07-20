const navOpen = document.querySelector(".nav-open-btn");
const navClose = document.querySelector(".nav-close-btn");

navOpen.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navClose.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
