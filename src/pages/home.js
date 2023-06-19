import heroImg from "../img/hero-1.jpg";

const home = () => {
  const content = document.querySelector("#content");
  const home = document.createElement("section");
  home.classList.add("home", "container");

  const homeTitle = document.createElement("div");
  homeTitle.classList.add("home__title");
  const homeTitle1 = document.createElement("p");
  const homeTitle2 = document.createElement("p");
  homeTitle1.textContent = "123 Demo St.";
  homeTitle2.textContent = "New York, NY 10001";
  homeTitle.appendChild(homeTitle1);
  homeTitle.appendChild(homeTitle2);
  home.appendChild(homeTitle);

  const homeImg = document.createElement("div");
  homeImg.classList.add("home__img");
  const img = new Image();
  img.src = heroImg;
  img.alt = "hero";
  img.classList.add("img");
  homeImg.appendChild(img);
  home.appendChild(homeImg);

  const homeInfo = document.createElement("div");
  homeInfo.classList.add("home__title", "home__info");
  const homeInfoText1 = document.createElement("p");
  homeInfoText1.textContent = "18:00 to 03:00";
  const homeInfoText2 = document.createElement("p");
  homeInfoText2.textContent = "Monday to Sunday";
  homeInfo.appendChild(homeInfoText1);
  homeInfo.appendChild(homeInfoText2);
  home.appendChild(homeInfo);

  content.appendChild(home);

  return home;
};

export { home };
