/**         All the DOM manipulation will be done from this module          */
import Api from "./api.js";
import landing from "./layouts/landing.js";
import menu from "./layouts/menu.js";
import item from "./layouts/item.js";
import modalReserve from "./layouts/modal-reserve.js";
import modalComments from "./layouts/modal-comments.js";
import modalCommentNew from "./layouts/modal-comment-new.js";

/*          Initializes the active components                               */
const main = document.getElementById("main");

function displayCommentNew() {
  main.insertAdjacentHTML("beforeend", modalCommentNew);
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
  main.insertAdjacentHTML("beforeend", modalComments);
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
  main.insertAdjacentHTML("beforeend", modalReserve);
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

function displayItem() {
  main.innerHTML = null;
  main.insertAdjacentHTML("beforeend", item);
  const commentsBtn = document.getElementById("btn-comments");
  const reserveBtn = document.getElementById("btn-reserve");
  commentsBtn.addEventListener("click", () => {
    displayComments();
  });
  reserveBtn.addEventListener("click", () => {
    displayReserve();
  });
}

function displayMenu() {
  main.innerHTML = null;
  main.insertAdjacentHTML("beforeend", menu);
  const openItem = document.getElementsByClassName("l-menu-main-item-shape");
  Array.from(openItem).forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.id);
      displayItem(item.id);
    });
  });
}

function init() {
  main.insertAdjacentHTML("beforeend", landing);
  const enterBtn = document.getElementById("arrow-left-hero");
  enterBtn.addEventListener("click", () => {
    displayMenu();
  });
}

init();
