/**
 *          Api class handles all the communication with the API                  */
/**          GET - https://microverse.abi.api.waldenberginc.com/api/read.php Fetch ALL Records
             GET - https://microverse.abi.api.waldenberginc.com/api/single_read.php/?id=2 Fetch Single Record
*/

class Api {
  constructor() {
    this.baseUrl = "https://microverse.abi.api.waldenberginc.com/api";
    this.menu = [];
  }

  /**         Obtains the record of scores from the API          */
  async refresh() {
    const response = await fetch(`${this.baseUrl}/read.php`)
      .then((response) => response.json())
      .then((json) => {
        this.scores = json.body;
        console.log(this.scores);
        return this.scores;
      });
    return response;
  }
}

export default Api;
