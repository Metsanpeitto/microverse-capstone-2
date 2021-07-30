import modal from "../../images/modal.svg";

const modalReserve = `<section id="modal-reserve" class="l-modal">
        <img class="l-modal-background" src="${modal}" alt="main-image" />
        <h3 class="l-modal-title">Reservations</h3>
        <section class="modal-list">
          <div class="modal-list-item">
            <h5>03/11/21</h5
            -
            <h5>14:00</h5>
            -
            <h5>William</h5>
          </div>
          <div class="modal-list-item">
            <h5>03/11/21</h5>
            -
            <h5>14:00</h5>
            -
            <h5>William</h5>
          </div>
        </section>
        <section class="new">
          <h5 class="new-title">New Reservation</h5>
          <div class="new-input">
            <h5>Input your date:</h5>
            <input id="reserve-date" type="text" />
          </div>
          <div class="new-input">
            <h5>Input your time:</h5>
            <input id="reserve-time" type="text" />
          </div>
          <div class="new-input">
            <h5>Input your name:</h5>
            <input id="reserve-name" type="text" />
          </div>
        </section>
        <section class="buttons">
          <button id="btn-reserve" class="btn-1">New Reservation</button>
          <button id="btn-reserve-cancel" class="btn-1 cancel">Cancel</button>
        </section>
      </section>
`;

export default modalReserve;
