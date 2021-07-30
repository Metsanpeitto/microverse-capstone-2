import itemShape from "../../images/item-shape-large.png";
import tacos from "../../images/tacosTr.png";
import lines from "../../images/zigzag.svg";
import starLarge from "../../images/star-large.svg";
import starSmall from "../../images/star-small.svg";
import comments from "../../images/comments-icon.svg";
import reserve from "../../images/reserve-icon.svg";
import footBarBackground from "../../images/footbar.svg";

import modal from "../../images/modal.svg";

const item = `<section class="l-item-detail">
       <img class="l-item-detail-image" src=${lines} alt="main-image" />
        <section class="l-item-detail-title">
          <h2 class="l-item-detail-title-large">Tacos</h2>
          <h5 class="l-item-detail-title-price">$4.50</h5>
        </section>
        <section class="l-item-detail-main">
          <div class="l-item-detail-main-image">
            <img class="l-item-detail-main-image-main" src=${tacos} alt="main-image" />
            <img class="l-item-detail-main-image-shape" src=${itemShape} alt="main-image-shape" />
          </div>
          <div class="l-item-detail-main__stars">
            <img class="stars-img" src=${starSmall} alt="stars" />
            <h6 class="stars-count">25</h6>
          </div>
        </section>
        <section class="l-item-detail__ingredients">
            <h6 class="ingredients-title">Ingredients:</h6>
            <h6 class="ingredients-content">- Tortilla , Meat, Tomato</h6>
        </section>        
        <section class="l-item-detail__footbar">
          <img class="footbar-background" src=${footBarBackground} alt="footbar-background" />
          <img id="btn-comments" class="footbar-comments" src=${comments} alt="comments-button" />
          <img class="footbar-star" src=${starLarge} alt="star-button" />
          <img id="btn-reserve" class="footbar-reserve" src=${reserve} alt="reserve-button" />
        </section>
      </section>`;

export default item;
