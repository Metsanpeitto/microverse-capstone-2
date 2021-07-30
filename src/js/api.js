/**
 *          Api class handles all the communication with the API                  */
/**          GET - https://microverse.abi.api.waldenberginc.com/api/read.php Fetch ALL Records
             GET - https://microverse.abi.api.waldenberginc.com/api/single_read.php/?id=2 Fetch Single Record
*/

class Api {
  constructor() {
    this.fetchUrl = "https://microverse.abi.api.waldenberginc.com/api";
    this.postUrl =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
    this.menu = [];
    this.check();
  }

  /**         Checks if a app id is stored in local storage               */
  appIdStored() {
    this.found = false;
    const appId = JSON.parse(window.localStorage.getItem("appId"));
    if (appId) {
      this.appId = appId;
      this.found = true;
    }
    return this.found;
  }

  /**         Checks if this is the first time running the app             */
  /**         if it is, creates a game score folder in the API             */
  async check() {
    const appStored = this.appIdStored();
    if (appStored === false) {
      await fetch(`${this.postUrl}/apps`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const str = data.result; // These lines modify the received string
          const str1 = str.replace("App with ID:", "");
          const str2 = str1.replace("added.", "");
          const str3 = str2.replaceAll(/\s/g, "");
          this.appId = str3; // The formatted string is stored in local storage
          window.localStorage.setItem("appId", JSON.stringify(this.appId));
        });
    }
  }

  /**         Obtains the record of scores from the API          */
  async refresh() {
    const response = await fetch(`${this.fetchUrl}/read.php`)
      .then((response) => response.json())
      .then((json) => {
        this.menu = json.body;
        return this.menu;
      });
    return response;
  }
}

export default Api;
