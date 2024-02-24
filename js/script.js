const toggleBtn = document.querySelector(".menu__button-toggle");

const toggleIcon = document.querySelector(".bx-menu");

const navBar = document.querySelector(".header__menu-small");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");

  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
    toggleIcon.classList.remove("bx-x");
    toggleIcon.classList.add("bx-menu");
  } else {
    navBar.classList.add("open");
    toggleIcon.classList.remove("bx-menu");
    toggleIcon.classList.add("bx-x");
  }
});
