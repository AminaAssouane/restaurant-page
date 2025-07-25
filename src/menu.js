const content = document.getElementById("content");

function createTitle1() {
  let title1 = document.createElement("div");
  title1.classList.add("title1");
  title1.innerText = "Menu";
  return title1;
}

function createLight() {
  let light = document.createElement("div");
  light.classList.add("light");
  return light;
}

function createTitle2(title) {
  let title2 = document.createElement("div");
  title2.classList.add("title2");
  title2.innerText = title;
  return title2;
}

function createTitle3() {
  let title3 = document.createElement("div");
  title3.classList.add("title3");
  return title3;
}

function menuItem(title, description, price) {
  let divMenuItem = createLight();

  let menuTitle = createTitle3();
  menuTitle.innerText = title;

  let menuDescription = document.createElement("p");
  menuDescription.innerText = description;

  let menuPrice = document.createElement("p");
  menuPrice.classList.add("price");
  menuPrice.innerText = price;

  divMenuItem.appendChild(menuTitle);
  divMenuItem.appendChild(menuDescription);
  divMenuItem.appendChild(menuPrice);

  return divMenuItem;
}

function createBeverages() {
  let beverages = document.createElement("div");
  beverages.classList.add("beverages");

  let title2 = createTitle2("Beverages");
  let menuItem1 = menuItem(
    "Love Potion",
    "This lovely beverage will make any worthy creature adore you ferociously.",
    "3$"
  );

  let menuItem2 = menuItem(
    "Whimsical Elixir",
    "This strange liquid seems to turn any skeptic into a dreamy fella.",
    "5$"
  );

  let menuItem3 = menuItem("Poison", "CAREFUL! This is dangerous.", "-666$");

  beverages.appendChild(title2);
  beverages.appendChild(menuItem1);
  beverages.appendChild(menuItem2);
  beverages.appendChild(menuItem3);

  return beverages;
}

function createMainDishes() {
  let mainDishes = document.createElement("div");
  mainDishes.classList.add("main-dishes");

  let title2 = createTitle2("Main dishes");
  let menuItem1 = menuItem(
    "Fairy Bread",
    "Plain, normal, peasant-y bread seasoned with fairy dust.",
    "1$"
  );

  let menuItem2 = menuItem(
    "Poisoned Apple",
    "Retrieved from a mysterious cottage inhabited by 7 dwarves.",
    "6$"
  );

  let menuItem3 = menuItem(
    "Magical Cauldron",
    "Will produce the exact taste you want to have in your mouth at any moment.",
    "20$"
  );

  mainDishes.appendChild(title2);
  mainDishes.appendChild(menuItem1);
  mainDishes.appendChild(menuItem2);
  mainDishes.appendChild(menuItem3);
  return mainDishes;
}

function createMenuPage() {
  // Creating the menu sections
  let title1 = createTitle1();
  let beverages = createBeverages();
  let mainDishes = createMainDishes();

  // Creating the menu section
  let section = document.createElement("section");
  section.classList.add("menu");

  // Appending the different parts to our section
  section.appendChild(title1);
  section.appendChild(beverages);
  section.appendChild(mainDishes);

  // Appending the section to our content div
  content.appendChild(section);
}

export default createMenuPage;
