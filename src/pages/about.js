import aboutImg from "../img/about.jpg";

const about = () => {
  const content = document.querySelector("#content");
  const about = document.createElement("section");
  about.classList.add("about", "container");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("about__img-container");
  const img = new Image();
  img.src = aboutImg;
  img.alt = "about";
  img.classList.add("about__img");
  imgContainer.appendChild(img);
  about.appendChild(imgContainer);

  const aboutText = document.createElement("div");
  aboutText.classList.add("about__text");
  const aboutTitle = document.createElement("h2");
  aboutTitle.classList.add("about__title");
  aboutTitle.textContent = "About Us";
  aboutText.appendChild(aboutTitle);
  const info = [
    "Hey there! We're a team of friendly folks who love serving up great drinks in a fun, laid-back atmosphere. We believe that a good bar is all about community, and we strive to make every person who walks through our doors feel like they're part of ours. Our staff is always happy to chat, recommend drinks, and provide top-notch service.",
    "We take pride in our selection of beers, wines, cocktails, and spirits, and we're always experimenting with new flavors and ingredients to keep things interesting. We want you to have a great time at our bar, whether you're stopping in for a quick drink or settling in for a night out with friends.",
    "So come on in, grab a drink, and let's have some fun!",
  ];
  info.forEach((text) => {
    const aboutInfo = document.createElement("p");
    aboutInfo.classList.add("about__info");
    aboutInfo.textContent = text;
    aboutText.appendChild(aboutInfo);
  });

  about.appendChild(aboutText);
  content.appendChild(about);

  return about;
};

export { about };
