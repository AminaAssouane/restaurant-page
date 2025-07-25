import "./styles.css";
import "./main.js";
import "./menu.js";
import "./contact.js";

console.log("Its running.");

let buttons = document.querySelectorAll("button");

function tabbedBrowsing() {
  for (let button of buttons) {
    button.addEventListener("click", () => {});
  }
}
