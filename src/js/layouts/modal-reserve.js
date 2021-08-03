import modal from '../../images/modal.svg';

const modalReserveLayout = (item) => {
  let template = `<section id="modal-reserve" class="l-modal">
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
            <input id="reserve-date-start" type="text" placeholder="Input your start date" />
          </div>
          <div class="new-input">
            <input id="reserve-date-end" type="text" placeholder="Input your end date" />
          </div>
          <div class="new-input">
            <input id="reserve-name" type="text" placeholder="Input your name" />
          </div>
        </section>
        <section class="buttons">
          <button id="btn-reserve-new" class="btn-1">New Reservation</button>
          <button id="btn-reserve-cancel" class="btn-1 cancel">Cancel</button>
        </section>
      </section>
`;

  if (item.reservations) {
    template = `<section id="modal-reserve" class="l-modal">
        <img class="l-modal-background" src="${modal}" alt="main-image" />
        <h3 class="l-modal-title">Reservations</h3>
        <section class="modal-list">

        ${item.reservations.map((i) => {
    const reservation = `<div class="modal-list-item">
            <h5>${i.date_start}</h5
            -
            <h5>${i.date_end}</h5>
            -
            <h5>${i.username}</h5>
          </div>
        `;
    return reservation;
  })}

        </section>
        <section class="new">
          <h5 class="new-title">New Reservation</h5>
          <div class="new-input">
            <input id="reserve-date-start" type="text" placeholder="Input your date start"/>
          </div>
          <div class="new-input">
            <input id="reserve-date-end" type="text" placeholder="Input your date end" />
          </div>      
          <div class="new-input">
            <input id="reserve-name" type="text" placeholder="Input your name"/>
          </div>
        </section>
        <section class="buttons">
          <button id="btn-reserve-new" class="btn-1">Submit</button>
          <button id="btn-reserve-cancel" class="btn-1 cancel">Go Back</button>
        </section>
      </section>`;
  }

  return template;
};

export default modalReserveLayout;
