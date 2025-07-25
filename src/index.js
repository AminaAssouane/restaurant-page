import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

console.log("Its running.");

// The logic behind our tab switching

createHomePage();
createMenuPage();
createContactPage();

let buttons = document.querySelectorAll("button");
let sections = document.querySelectorAll("section");

function tabbedBrowsing() {
  for (let button of buttons) {
    button.addEventListener("click", () => {
      for (let section of sections) {
        section.style.display = "none";
      }

      let section = document.querySelector(`section.${button.className}`);
      section.style.display = "block";
    });
  }
}

tabbedBrowsing();
