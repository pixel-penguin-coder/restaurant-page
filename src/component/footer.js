const footer = () => {
  const content = document.querySelector("#content");
  const footer = document.createElement("footer");
  footer.classList.add("footer", "container");

  const footerDiv = document.createElement("div");
  const footerList = document.createElement("ul");
  footerList.classList.add("footer__list");
  const footerItems = ["menu", "about", "contact", "book a Table"];
  footerItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("footer__item");
    const a = document.createElement("a");
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-square", "fa-2xs");
    a.classList.add("footer__link");
    a.textContent = `${[item.charAt(0).toUpperCase()]}${[item.slice(1)]}`;
    a.href = `#${item}`;
    li.appendChild(a);
    li.appendChild(i);
    footerList.appendChild(li);
  });
  footerDiv.appendChild(footerList);
  footer.appendChild(footerDiv);

  const footerInfo = document.createElement("div");
  footerInfo.classList.add("footer__info");
  const footerInfoText1 = document.createElement("p");
  const footerInfoText2 = document.createElement("div");
  footerInfoText1.textContent = "+55 11 1234-5678";
  footerInfoText1.classList.add("footer__info--phone");
  footerInfoText2.innerHTML = `<p class="footer__info--made">Made by <a href="https://github.com/" target="_blank" class="footer__icon"><i class="fa-brands fa-github fa-2xs"></i></a></p>`;
  footerInfo.appendChild(footerInfoText1);
  footerInfo.appendChild(footerInfoText2);
  footer.appendChild(footerInfo);

  content.appendChild(footer);
};

export { footer };
