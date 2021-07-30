/**         All the modules are called from here                           */
import "./style.scss";
import Api from "./js/api.js";
import { init } from "./js/dom-calls.js";

let menu = [];

const api = new Api();
api.refresh().then((response) => {
  menu = response;
  init(menu);
});
