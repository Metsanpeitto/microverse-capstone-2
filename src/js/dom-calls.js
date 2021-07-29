/**         All the DOM manipulation will be done from this module          */
import Api from "./api.js";
import layoutLanding from "./layouts/landing.js";
import menu from "./layouts/menu.js";
import item from "./layouts/item.js";

/*          Initializes the active components                               */
const main = document.getElementById("main");

function landing() {
  main.insertAdjacentHTML("beforeend", item);
}

landing();
