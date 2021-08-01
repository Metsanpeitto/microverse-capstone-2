/**         All the modules are called from here                           */
import "./style.scss";
import Api from "./js/api.js";
import localStorage from "./js/localstorage.js";
import { init } from "./js/dom-calls.js";

const testLike = { item_id: "item1" };
const testGetComments = "item1";
// let comment = {
//  item_id: "item1",
//  username: "Jane",
//  comment: "Hello",
// };

const getReservations = "item1";
const testReservations = {
  item_id: "item1",
  username: "Jane",
  date_start: "2020-10-15",
  date_end: "2020-10-16",
};

const api = new Api();
let menu = [];
let likes = null;

/*          Gets and stores the changes in the inputs    */
window.handleChange = function handleChange(e, item) {
  const { id } = e.currentTarget;
  const { value } = e.currentTarget;
  // If I have a comment for an item let it ready to send
};

window.addStar = function addStar(item) {
  const index = menu.indexOf(item);
  let count = menu[index].stars ? menu[index].stars : 0;
  count += 1;
  menu[index].stars = count;
  const data = { item_id: item.name };
  api.postLikes(data).then((response) => {
    if (response === "Created") {
      localStorage(menu);
    }
  });
  return count;
};

window.postComments = function postComments(comment) {
  return api.postComment(comment).then((response) => {
    console.log(response);
    return response;
  });
};

window.fetchComments = function fetchComments(item) {
  return api.getComments(item.name).then((response) => {
    let pos = null;
    menu.forEach((i, index) => {
      if (i.name === item.name) {
        pos = index;
      }
    });
    const obj = JSON.parse(response);
    menu[pos].comments = obj;
    return menu[pos];
  });
};

window.postReservation = function postReservation(reservation) {
  return api.postReservation(reservation).then((response) => {
    console.log("Response");
    console.log(response);
    return response;
  });
};

window.fetchReservations = function fetchReservations(item) {
  return api.getReservations(item.name).then((response) => {
    let pos = null;
    menu.forEach((i, index) => {
      if (i.name === item.name) {
        pos = index;
      }
    });
    const obj = JSON.parse(response);
    if (obj.length > 0) {
      console.log(typeof obj);
      console.log(obj);
      menu[pos].reservations = obj;
    }

    return menu[pos];
  });
};

api.refresh().then((response) => {
  menu = response;
  api.getLikes().then((response) => {
    likes = response;
    likes.forEach((item) => {
      menu.forEach((i, index) => {
        if (i.name === item.item_id) {
          menu[index].stars = item.likes;
        }
      });
    });
  });
  init(menu);
  // populate();
});

// api.postLikes(testLike).then((response) => {
//  console.log(response);
// });

// api.getComments(testGetComments).then((response) => {
//  console.log(response);
//  comments = response;
// });

// api.postComment(testComment).then((response) => {
//  console.log(response);
// });

// api.getReservations(getReservations).then((response) => {
//  reservations = response;
// });

// api.postReservation(testReservations).then((response) => {
//  reservations = response;
// });

/**   The menu object received from my own Api must to be merged
 *    with the information retrieved from the Microverse Api
 */
