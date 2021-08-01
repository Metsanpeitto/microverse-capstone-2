/**         All the DOM manipulation will be done from this module          */
import Api from "./api.js";
import landingLayout from "./layouts/landing.js";
import menuLayout from "./layouts/menu.js";
import itemLayout from "./layouts/item.js";
import modalReservationsLayout from "./layouts/modal-reserve.js";
import modalCommentsLayout from "./layouts/modal-comments.js";
import modalCommentNewLayout from "./layouts/modal-comment-new.js";

/*          Initializes the active components                               */
const main = document.getElementById("main");

function displayCommentNew(item) {
  main.insertAdjacentHTML("beforeend", modalCommentNewLayout);
  const submitBtn = document.getElementById("btn-new-submit");
  const cancelBtn = document.getElementById("btn-new-cancel");
  const textInput = document.getElementById("comment-text");
  const nameInput = document.getElementById("comment-name");

  submitBtn.addEventListener("click", () => {
    const username = nameInput.value;
    const comment = textInput.value;
    const data = {
      item_id: item.name,
      username,
      comment,
    };
    window.postComments(data).then((response) => {
      if (response === "Created") {
        const modal = document.getElementById("modal-comments-new");
        main.removeChild(modal);
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-comments-new");
    main.removeChild(modal);
  });
}

function displayComments(item) {
  window.fetchComments(item).then((newItem) => {
    main.insertAdjacentHTML("beforeend", modalCommentsLayout(newItem));
    const newBtn = document.getElementById("btn-new");
    const cancelBtn = document.getElementById("btn-comment-cancel");
    newBtn.addEventListener("click", () => {
      displayCommentNew(newItem);
    });

    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementById("modal-comments");
      main.removeChild(modal);
    });
  });
}

function displayReserve(item) {
  window.fetchReservations(item).then((newItem) => {
    main.insertAdjacentHTML("beforeend", modalReservationsLayout(newItem));

    const cancelBtn = document.getElementById("btn-reserve-cancel");
    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementById("modal-reserve");
      main.removeChild(modal);
    });

    const submitBtn = document.getElementById("btn-reserve-new");
    console.log(submitBtn);
    submitBtn.addEventListener("click", () => {
      const dateStart = document.getElementById("reserve-date-start");
      const dateEnd = document.getElementById("reserve-date-end");
      const name = document.getElementById("reserve-name");

      const data = {
        item_id: item.name,
        username: name.value,
        date_start: dateStart.value,
        date_end: dateEnd.value,
      };
      console.log(data);
      window.postReservation(data).then((response) => {
        if (response === "Created") {
          const modal = document.getElementById("modal-reserve");
          main.removeChild(modal);
        }
      });
    });
  });
}

function displayItem(item) {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
  main.insertAdjacentHTML("beforeend", itemLayout(item));
  const commentsBtn = document.getElementById("btn-comments");
  const reserveBtn = document.getElementById("btn-reserve");
  const closeBtn = document.getElementById("btn-close-item");
  const startBtn = document.getElementById("btn-star");

  commentsBtn.addEventListener("click", () => {
    displayComments(item);
  });

  startBtn.addEventListener("click", () => {
    const count = window.addStar(item);
    const starsCount = document.getElementById("stars-count");
    starsCount.innerText = count;
  });

  reserveBtn.addEventListener("click", () => {
    displayReserve(item);
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
