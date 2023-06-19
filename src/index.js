import { home } from "../src/pages/home";
import { firstLoad } from "../src/component/firstLoad";
import { about } from "../src/pages/about";
import { menu } from "../src/pages/menu";
import { render } from "../src/component/render";
import { contact } from "../src/pages/contact";
import "../src/style/style.css";

firstLoad();

const homeButton = document.querySelector("a[href='#home']");
const aboutButtons = document.querySelectorAll("a[href='#about']");
const menuButtons = document.querySelectorAll("a[href='#menu']");
const contactButtons = document.querySelectorAll("a[href='#contact']");

homeButton.addEventListener("click", function () {
  const content = document.querySelector("#content");
  render();
  content.insertBefore(home(), content.children[1]);
});

aboutButtons.forEach((aboutButton) => {
  aboutButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    render();
    content.insertBefore(about(), content.children[1]);
  });
});

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = document.querySelector("#content");
    render();
    content.insertBefore(menu(), content.children[1]);
  });
});

contactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = document.querySelector("#content");
    render();
    content.insertBefore(contact(), content.children[1]);
  });
});
