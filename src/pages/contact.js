const contact = () => {
  const content = document.querySelector("#content");
  const contact = document.createElement("section");
  contact.classList.add("contact", "container");

  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact__header");
  const contactTitle1 = document.createElement("p");
  contactTitle1.classList.add("contact__title");
  contactTitle1.textContent = "123 Demo St.";
  const contactTitle2 = document.createElement("p");
  contactTitle2.classList.add("contact__title");
  contactTitle2.textContent = "New York, NY 10001";
  contactHeader.appendChild(contactTitle1);
  contactHeader.appendChild(contactTitle2);
  contact.appendChild(contactHeader);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact__info");
  const contactInfoText1 = document.createElement("p");
  contactInfoText1.textContent = "18:00 to 03:00";
  const contactInfoText2 = document.createElement("p");
  contactInfoText2.textContent = "Monday to Sunday";
  contactInfo.appendChild(contactInfoText1);
  contactInfo.appendChild(contactInfoText2);
  contactHeader.appendChild(contactInfo);

  content.appendChild(contact);
  return contact;
};

export { contact };
