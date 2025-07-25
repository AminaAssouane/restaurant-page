const content = document.getElementById("content");

function createTitle1() {
  let title1 = document.createElement("div");
  title1.classList.add("title1");
  title1.innerText = "Enchanted Land";
  return title1;
}

function createLight() {
  let light = document.createElement("div");
  light.classList.add("light");
  return light;
}

function createTitle2() {
  let title2 = document.createElement("div");
  title2.classList.add("title2");
  return title2;
}

function createHours() {
  // Creating our "lights" div
  let hoursDiv = createLight();

  // Creating the title
  let title2 = createTitle2();
  title2.innerText = "Hours";

  // Creating and appending the list items from the hoursList
  let hoursArray = [
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
    "Sunday: 8am - 8pm",
  ];

  let hoursList = document.createElement("ul");

  for (let hour of hoursArray) {
    let li = document.createElement("li");
    li.innerText = hour;
    hoursList.appendChild(li);
  }

  // Appending the title and the hours list to our "lights" div
  hoursDiv.appendChild(title2);
  hoursDiv.appendChild(hoursList);

  return hoursDiv;
}

function createLocation() {
  // Creating our "lights" div
  let locationDiv = createLight();

  // Creating the "Location" title
  let title2 = createTitle2();
  title2.innerText = "Location";

  // Creating our "Location" paragraph
  let pLocation = document.createElement("p");
  pLocation.innerText = "13 Meadow's Crypt, Cottagesquare, Fantasia";

  // Appending the title and the paragraph to our "lights" div
  locationDiv.appendChild(title2);
  locationDiv.appendChild(pLocation);

  return locationDiv;
}

function createHomePage() {
  // Creating the differents parts of our section
  let title = createTitle1();
  let hours = createHours();
  let location = createLocation();

  // Creating the section
  let section = document.createElement("section");
  section.classList.add("home");

  // Appending the different parts to our section
  section.appendChild(title);
  section.appendChild(hours);
  section.appendChild(location);

  // Appending the section to the #container div
  content.appendChild(section);
}

export default createHomePage;
