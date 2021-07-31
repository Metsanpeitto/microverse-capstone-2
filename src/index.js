/**         All the modules are called from here                           */
import "./style.scss";
import Api from "./js/api.js";
import { init } from "./js/dom-calls.js";

const stars = null;
const testLike = { item_id: "item1" };
const comments = null;
const testGetComments = "item1";
const testComment = {
  item_id: "item1",
  username: "Jane",
  comment: "Hello",
};

const getReservations = "item1";
const reservations = null;
const testReservations = {
  item_id: "item1",
  username: "Jane",
  date_start: "2020-10-15",
  date_end: "2020-10-16",
};

const api = new Api();
let menu = [];

window.addStar = function addStar(item) {
  const index = menu.indexOf(item);
  let count = menu[index].stars ? menu[index].stars : 0;
  count += 1;
  menu[index].stars = count;
  // localStorage(menu);
};

api.refresh().then((response) => {
  menu = response;
  init(menu);
});

// api.getLikes().then((response) => {
//  console.log(response);
//  likes = response;
// });

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
