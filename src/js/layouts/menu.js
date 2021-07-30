import sandwich from "../../images/sandwichTr.png";
import burger from "../../images/burgerTr.png";
import tacos from "../../images/tacosTr.png";
import hotdog from "../../images/hotdogTr.png";
import pizza from "../../images/pizzaTr.png";
import doughnut from "../../images/doughnutTr.png";
import fries from "../../images/frenchfriesTr.png";
import drinks from "../../images/drinkTr.png";
import shadow from "../../images/shadowTr.png";
import itemShape from "../../images/item-shape.svg";
import itemShapeBackground from "../../images/item-shape-background.svg";

const menu = `<section class="l-menu">
        <section class="l-menu-main">
          <div class="l-menu-main-group">
            <div class="l-menu-main-item item-left">
              <img src=${burger} alt="burger" class="l-menu-main-item-img img-left" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-left" />
              <img id="burger" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-left" />
              <img src=${itemShapeBackground} alt="item-shape-background" class="l-menu-main-item-shape-background background-left" />
      
              <h6 class="l-menu-main-item-text">Burger</h6>
            </div>
            <div class="l-menu-main-item item-right">
              <img src=${tacos} alt="tacos" class="l-menu-main-item-img img-right" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-right" />
              <img id="tacos" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-right" />
              <img src=${itemShapeBackground} alt="item-shape" class="l-menu-main-item-shape-background background-right" />
              <h6 class="l-menu-main-item-text">Tacos</h6>
            </div>
          </div>
          <div class="l-menu-main-group">
            <div class="l-menu-main-item item-left">
              <img src=${sandwich} alt="burger" class="l-menu-main-item-img img-left" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-left" />
              <img id="sandwich" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-left" />
              <img src=${itemShapeBackground} alt="item-shape" class="l-menu-main-item-shape-background background-left" />
              <h6 class="l-menu-main-item-text">Burger</h6>
            </div>
            <div class="l-menu-main-item item-right">
              <img src=${pizza} alt="tacos" class="l-menu-main-item-img img-right" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-right" />
              <img id="pizza" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-right" />
              <img src=${itemShapeBackground} alt="item-shape" class="l-menu-main-item-shape-background background-right" />
              <h6 class="l-menu-main-item-text">Tacos</h6>
            </div>
          </div>
          <div class="l-menu-main-group">
            <div class="l-menu-main-item item-left">
              <img src=${fries} alt="burger" class="l-menu-main-item-img img-left" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-left" />
              <img id="fries" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-left" />
              <img src=${itemShapeBackground} alt="item-shape" class="l-menu-main-item-shape-background background-left" />
              <h6 class="l-menu-main-item-text">Burger</h6>
            </div>
            <div class="l-menu-main-item item-right">
              <img src=${hotdog} alt="tacos" class="l-menu-main-item-img img-right" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-right" />
              <img id="hotdog" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-right" />
              <img src=${itemShapeBackground} alt="item-shape" class="l-menu-main-item-shape-background background-right" />
              <h6 class="l-menu-main-item-text">Tacos</h6>
            </div>
          </div>
          <div class="l-menu-main-group">
            <div class="l-menu-main-item item-left">
              <img src=${doughnut} alt="burger" class="l-menu-main-item-img img-left" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-left" />
              <img id="doughnut" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-left" />
              <img src=${itemShapeBackground} alt="item-shape" class="l-menu-main-item-shape-background background-left" />
              <h6 class="l-menu-main-item-text">Burger</h6>
            </div>
            <div class="l-menu-main-item item-right">
              <img src=${drinks} alt="tacos" class="l-menu-main-item-img img-right" />
              <img src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-right" />
              <img id="drinks" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape shape-right" />
              <img src=${itemShapeBackground} alt="item-shape" class="l-menu-main-item-shape-background background-right" />
              <h6 class="l-menu-main-item-text">Tacos</h6>
            </div>
          </div>         
        </section>
      </section>`;

export default menu;
