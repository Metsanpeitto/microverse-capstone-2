/**         All the DOM manipulation will be done from this module          */
import Api from "./api.js";
import landingLayout from "./layouts/landing.js";
import menuLayout from "./layouts/menu.js";
import itemLayout from "./layouts/item.js";
import modalReserveLayout from "./layouts/modal-reserve.js";
import modalCommentsLayout from "./layouts/modal-comments.js";
import modalCommentNewLayout from "./layouts/modal-comment-new.js";

/*          Initializes the active components                               */
const main = document.getElementById("main");

function displayCommentNew() {
  main.insertAdjacentHTML("beforeend", modalCommentNewLayout);
  const submitBtn = document.getElementById("btn-new-submit");
  const cancelBtn = document.getElementById("btn-new-cancel");
  submitBtn.addEventListener("click", () => {
    // api call
  });

  cancelBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-comments-new");
    main.removeChild(modal);
  });
}

function displayComments() {
  main.insertAdjacentHTML("beforeend", modalCommentsLayout);
  const newBtn = document.getElementById("btn-new");
  const cancelBtn = document.getElementById("btn-comment-cancel");
  newBtn.addEventListener("click", () => {
    displayCommentNew();
  });

  cancelBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-comments");
    main.removeChild(modal);
  });
}

function displayReserve() {
  main.insertAdjacentHTML("beforeend", modalReserveLayout);
  const submitBtn = document.getElementById("btn-reserve");
  submitBtn.addEventListener("click", () => {
    // api call
  });

  const cancelBtn = document.getElementById("btn-reserve-cancel");
  cancelBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-reserve");
    main.removeChild(modal);
  });
}

function displayItem(item) {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
  main.insertAdjacentHTML("beforeend", itemLayout(item));
  const commentsBtn = document.getElementById("btn-comments");
  const reserveBtn = document.getElementById("btn-reserve");
  const closeBtn = document.getElementById("btn-close-item");

  commentsBtn.addEventListener("click", () => {
    displayComments();
  });
  reserveBtn.addEventListener("click", () => {
    displayReserve();
  });

  closeBtn.addEventListener("click", () => {
    const itemSection = document.getElementById("item");
    const main = document.getElementById("main");
    main.removeChild(itemSection);
    menu.style.display = "grid";
  });
}

function displayMenu(menu) {
  main.innerHTML = null;
  main.insertAdjacentHTML("beforeend", menuLayout(menu));
  const openItem = document.getElementsByClassName("l-menu-main-item-shape");
  Array.from(openItem).forEach((item, index) => {
    item.addEventListener("click", () => {
      displayItem(menu[index]);
    });
  });
}

function init(menu) {
  main.insertAdjacentHTML("beforeend", landingLayout);
  const enterBtn = document.getElementById("arrow-left-hero");
  enterBtn.addEventListener("click", () => {
    displayMenu(menu);
  });
}

export { init, displayMenu };
