/**       Saves and retrieves from local storage       */
const localStorage = (data) => {
  let newMenu = null;
  if (data) {
    window.localStorage.setItem("menu", JSON.stringify(data));
  } else {
    newMenu = JSON.parse(window.localStorage.getItem("menu"));
  }
  return newMenu;
};
export default localStorage;
