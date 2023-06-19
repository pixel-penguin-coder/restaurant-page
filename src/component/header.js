const header = () => {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  header.classList.add("container", "header");

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  header.appendChild(navbar);

  const logo = document.createElement("a");
  logo.classList.add("logo");
  logo.textContent = "The Corner";
  logo.href = "#home";
  navbar.appendChild(logo);

  const nav = document.createElement("ul");
  nav.classList.add("nav-menu");
  const navItems = ["menu", "about", "contact"];
  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.textContent = `${[item.charAt(0).toUpperCase()]}${[item.slice(1)]}`;
    a.href = `#${item}`;
    li.appendChild(a);
    nav.appendChild(li);
  });
  navbar.appendChild(nav);

  const actionBtn = document.createElement("a");
  actionBtn.classList.add("action-btn");
  actionBtn.textContent = "Book a Table";
  actionBtn.href = "#order";
  nav.appendChild(actionBtn);

  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  const hamburgerItems = ["", "", ""];
  hamburgerItems.forEach((item) => {
    const span = document.createElement("span");
    hamburger.appendChild(span);
    span.classList.add("bar");
  });
  navbar.appendChild(hamburger);

  content.appendChild(header);

  hamburgerMenu();
};

const hamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const homeButton = document.querySelector(".logo");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("overflow");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("overflow");
    })
  );

  homeButton.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("overflow");
  });
};

export { header };
