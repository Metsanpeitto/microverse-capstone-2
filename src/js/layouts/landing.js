import burgerIllustration from "../../images/burgerIllustration.png";
import shadow from "../../images/shadowIllustration.png";
import arrow from "../../images/down-arrow.svg";

const landingLayout = `<section class="l-landing">
        <section class="l-landing-hero">
          <h1 class="l-landing-hero__title-1">RAPIDO!</h1>
          <h1 class="l-landing-hero__title-2">RAPIDO!</h1>
          <h5 class="l-landing-hero__subtitle">Fast Food Restaurant</h5>
        </section>
        <section class="l-landing-hero__main">
          <img src=${burgerIllustration} class="l-landing-hero-main__image" alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero-main__image-shadow"
            alt="main-image-shadow"
          />
        </section>
        <section id="l-landing-hero__action" class="l-landing-hero__action">
          <h2 class="landing-text">ENTER</h2>
          <img class="landing-image" src=${arrow} id="arrow-left-hero" alt="arrow-left" />
        </section>
      </section>`;

export default landingLayout;
