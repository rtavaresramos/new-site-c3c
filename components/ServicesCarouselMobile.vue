<template>
  <div class="carousel-wrapper">
    <span id="services-options-1"></span>
    <span id="services-options-2"></span>
    <span id="services-options-3"></span>
    <span id="services-options-4"></span>
    <span id="services-options-5"></span>
    <span id="services-options-6"></span>
    <div
      class="carousel-services-options services-options-1 d-flex flex-col align-center justify-center"
    >
      <div class="item d-flex justify-between">
        <div class="phone-label">
          <h4>1/6</h4>
          <img
            src="https://store-images.s-microsoft.com/image/apps.39145.72ca98c3-ffc8-49aa-a5bd-ed619b74016e.2dd298db-5b52-49dd-a367-8a0d501112df.55dd9f16-179d-4401-b79a-933436513f12.png"
            alt=""
          />
          <h3>Salesforce</h3>
        </div>
        <div class="service-explain">
          <h3>Salesforce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit
            quae eum corporis ullam accusantium. Odio a nisi perspiciatis quis.
          </p>
        </div>
      </div>
      <div class="circles d-flex justify-start">
        <div class="circle active"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <a class="arrow arrow-prev" href="#services-options-6"></a>
      <a class="arrow arrow-next" href="#services-options-2"></a>
    </div>

    <div
      class="carousel-services-options services-options-2 d-flex flex-col align-center justify-center"
    >
      <div class="item d-flex justify-between">
        <div class="phone-label">
          <h4>2/6</h4>
          <img
            src="https://www.docusign.com.br/themes/custom/cubic/assets/images/logos/docusign_square_logo_white_on_black_rgb.png"
            alt=""
          />
          <h3>DocuSign</h3>
        </div>
        <div class="service-explain">
          <h3>DocuSign</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit
            quae eum corporis ullam accusantium. Odio a nisi perspiciatis quis.
          </p>
        </div>
      </div>
      <div class="circles d-flex justify-center">
        <div class="circle"></div>
        <div class="circle active"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <a class="arrow arrow-prev" href="#services-options-1"></a>
      <a class="arrow arrow-next" href="#services-options-3"></a>
    </div>

    <div
      class="carousel-services-options services-options-3 d-flex flex-col align-center justify-center"
    >
      <div class="item d-flex justify-between">
        <div class="phone-label">
          <h4>3/6</h4>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <h3>Microsoft</h3>
        </div>
        <div class="service-explain">
          <h3>Microsoft</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit
            quae eum corporis ullam accusantium. Odio a nisi perspiciatis quis.
          </p>
        </div>
      </div>
      <div class="circles d-flex justify-center">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle active"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>

      <a class="arrow arrow-prev" href="#services-options-2"></a>
      <a class="arrow arrow-next" href="#services-options-4"></a>
    </div>

    <div
      class="carousel-services-options services-options-4 d-flex flex-col align-center justify-center"
    >
      <div class="item d-flex justify-between">
        <div class="phone-label">
          <h4>4/6</h4>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <h3>NuxtJs</h3>
        </div>
        <div class="service-explain">
          <h3>NuxtJs</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit
            quae eum corporis ullam accusantium. Odio a nisi perspiciatis quis.
          </p>
        </div>
      </div>
      <div class="circles d-flex justify-center">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle active"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>

      <a class="arrow arrow-prev" href="#services-options-3"></a>
      <a class="arrow arrow-next" href="#services-options-5"></a>
    </div>

    <div
      class="carousel-services-options services-options-5 d-flex flex-col align-center justify-center"
    >
      <div class="item d-flex justify-between">
        <div class="phone-label">
          <h4>5/6</h4>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <h3>Firebase</h3>
        </div>
        <div class="service-explain">
          <h3>Firebase</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit
            quae eum corporis ullam accusantium. Odio a nisi perspiciatis quis.
          </p>
        </div>
      </div>
      <div class="circles d-flex justify-center">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle active"></div>
        <div class="circle"></div>
      </div>

      <a class="arrow arrow-prev" href="#services-options-4"></a>
      <a class="arrow arrow-next" href="#services-options-6"></a>
    </div>

    <div
      class="carousel-services-options services-options-6 d-flex flex-col align-center justify-center"
    >
      <div class="item d-flex justify-between">
        <div class="phone-label">
          <h4>6/6</h4>
          <img
            src="https://avatars.githubusercontent.com/u/7892489?s=200&v=4"
            alt=""
          />
          <h3>Netlify</h3>
        </div>
        <div class="service-explain">
          <h3>Netlify</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit
            quae eum corporis ullam accusantium. Odio a nisi perspiciatis quis.
          </p>
        </div>
      </div>
      <div class="circles d-flex justify-center">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle active"></div>
      </div>

      <a class="arrow arrow-prev" href="#services-options-5"></a>
      <a class="arrow arrow-next" href="#services-options-1"></a>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-size: 1rem;
  color: var(--gray-dark);
  margin-left: 80%;
  background: var(--light);
  width: 40px;
  text-align: center;
  border-radius: 4px;
}

p {
  color: var(--gray-dark);
  font-size: 1rem;
}

.phone-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 210px;
  margin-top: 4px;
  height: 290px;
  padding: 20px;
  border-radius: 14px;
  background: var(--primary);
}

.phone-label img {
  width: 55px;
  margin: 0 auto;
}

h3 {
  color: #fff;
  text-align: center;
}

.phone-label a {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
}
.phone-label p {
  margin-top: 20px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 300;
  hyphens: auto;
}

.circles {
  position: absolute;
  bottom: -10px;
  align-items: flex-end;
}

.circle {
  position: relative;
  min-width: 20px;
  height: 20px;
  background: var(--primary-disabled);
  border-radius: 50%;
  margin: 20px 4px -40px;
}

.circle.active {
  background: #b77a51;
}

.carousel-wrapper {
  min-height: 330px;
  max-height: 530px;
  padding: 10px 0;
  height: auto;
  position: relative;
  width: auto;
  margin: 0 auto;
}
.carousel-services-options-mobile {
  position: absolute;
  top: 14px;
  bottom: 0;
  left: -50px;
  right: 0;
  padding: 25px 50px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.arrow {
  border: solid rgba(255, 255, 255, 0.5);
  border-width: 0 14px 14px 0;
  border-radius: 4px;
  display: inline-block;
  padding: 12px;
}

.arrow-prev {
  right: 90%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(135deg);
}

.arrow-next {
  left: 90%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.light {
  color: white;
}

@media (max-width: 480px) {
  .arrow,
  .light .arrow {
    background-size: 10px;
    background-position: 10px 50%;
  }
}

/*Select every element*/
[id^="services-options-mobile"] {
  display: none;
}

.services-options-mobile-1 {
  margin: 10px;
  min-width: 280px;

  z-index: 2;
  opacity: 1;
}

.services-options-mobile-2 {
  margin: 10px;
  min-width: 280px;
}

.services-options-mobile-3 {
  margin: 10px;
  min-width: 280px;
}

.services-options-mobile-4 {
  margin: 10px;
  min-width: 280px;
}

.services-options-mobile-5 {
  margin: 10px;
  min-width: 280px;
}
.services-options-mobile-6 {
  margin: 10px;
  min-width: 280px;
}

*:target ~ .services-options-mobile-1 {
  opacity: 0;
}

#services-options-mobile-1:target ~ .services-options-mobile-1 {
  opacity: 1;
}

#services-options-mobile-2:target ~ .services-options-mobile-2,
#services-options-mobile-3:target ~ .services-options-mobile-3,
#services-options-mobile-4:target ~ .services-options-mobile-4,
#services-options-mobile-5:target ~ .services-options-mobile-5,
#services-options-mobile-6:target ~ .services-options-mobile-6 {
  z-index: 3;
  opacity: 1;
}
</style>
