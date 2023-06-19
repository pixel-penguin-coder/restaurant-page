const drinks = () => {
  const drinks = [
    {
      name: "Margarita",
      price: 10,
      description: "Tequila, Triple Sec, Lime Juice, Salt Rim, Lime Wedge",
    },
    {
      name: "Old Fashioned",
      price: 12,
      description: "Bourbon, Sugar, Bitters, Orange Twist",
    },
    {
      name: "Moscow Mule",
      price: 9,
      description: "Vodka, Ginger Beer, Lime Juice, Copper Mug, Lime Wedge",
    },
    {
      name: "French 75",
      price: 14,
      description:
        "Gin, Lemon Juice, Simple Syrup, Champagne, Champagne Flute, Lemon Twist",
    },
    {
      name: "Paloma",
      price: 11,
      description:
        "Tequila, Grapefruit Juice, Lime Juice, Soda Water, Salt Rim, Grapefruit Wedge",
    },
  ];
  return drinks;
};

const food = () => {
  const food = [
    {
      name: "Cheeseburger",
      price: 12,
      description:
        "Beef Patty, American Cheese, Lettuce, Tomato, Onion, Pickle, Brioche Bun",
    },
    {
      name: "Chicken Sandwich",
      price: 11,
      description:
        "Fried Chicken Breast, Lettuce, Tomato, Onion, Pickle, Brioche Bun",
    },
    {
      name: "Caesar Salad",
      price: 9,
      description:
        "Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing",
    },
    {
      name: "Chicken Wings",
      price: 10,
      description: "Buffalo, BBQ, or Plain",
    },
    {
      name: "Fries",
      price: 5,
      description: "French Fries, Ketchup",
    },
  ];
  return food;
};

const menu = () => {
  const content = document.querySelector("#content");
  const menu = document.createElement("section");
  menu.classList.add("menu", "container");

  const menuHeaderContainer = document.createElement("div");
  menuHeaderContainer.classList.add("menu__header-container");
  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu__title");
  menuTitle.textContent = "Drinks";
  menuHeaderContainer.appendChild(menuTitle);
  menu.appendChild(menuHeaderContainer);

  const menuListContainer = document.createElement("div");
  menuListContainer.classList.add("menu__list-container");
  const menuList = document.createElement("ul");
  menuList.classList.add("menu__list");
  const items = drinks();
  items.forEach((drink) => {
    const div = document.createElement("div");
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu__item");

    const menuItemName = document.createElement("p");
    menuItemName.classList.add("menu__item-name");
    menuItemName.textContent = drink.name;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.classList.add("menu__item-description");
    menuItemDescription.textContent = drink.description;

    const menuItemPrice = document.createElement("span");
    menuItemPrice.classList.add("menu__item-price");
    menuItemPrice.textContent = `$${drink.price}`;
    div.appendChild(menuItemName);
    div.appendChild(menuItemDescription);
    menuItem.appendChild(div);
    menuItem.appendChild(menuItemPrice);
    menuList.appendChild(menuItem);
  });
  menuListContainer.appendChild(menuList);
  menu.appendChild(menuListContainer);

  const menuHeaderContainer2 = document.createElement("div");
  menuHeaderContainer2.classList.add("menu__header-container");
  const menuTitle2 = document.createElement("h2");
  menuTitle2.classList.add("menu__title");
  menuTitle2.textContent = "Food";
  menuHeaderContainer2.appendChild(menuTitle2);
  menu.appendChild(menuHeaderContainer2);

  const menuListContainer2 = document.createElement("div");
  menuListContainer2.classList.add("menu__list-container");
  const menuList2 = document.createElement("ul");
  menuList2.classList.add("menu__list");
  const items2 = food();
  items2.forEach((food) => {
    const div = document.createElement("div");
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu__item");

    const menuItemName = document.createElement("p");
    menuItemName.classList.add("menu__item-name");
    menuItemName.textContent = food.name;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.classList.add("menu__item-description");
    menuItemDescription.textContent = food.description;

    const menuItemPrice = document.createElement("span");
    menuItemPrice.classList.add("menu__item-price");
    menuItemPrice.textContent = `$${food.price}`;
    div.appendChild(menuItemName);
    div.appendChild(menuItemDescription);
    menuItem.appendChild(div);
    menuItem.appendChild(menuItemPrice);
    menuList2.appendChild(menuItem);
  });
  menuListContainer2.appendChild(menuList2);
  menu.appendChild(menuListContainer2);

  content.appendChild(menu);

  return menu;
};

export { menu };
