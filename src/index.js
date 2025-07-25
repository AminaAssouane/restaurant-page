import "./styles.css";
import "./main.js";
import "./menu.js";
import "./contact.js";

console.log("Its running.");

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
