<template>
  <div class="header-container">
    <div class="header">
      <h1>
        Soluções em tecnologia, feitas <wbr />
        por pessoas reais, para
        <wbr />
        necessidades reais
      </h1>

      <h4>
        Desenvolvimento de softwares Salesforce sob demanda, capacitação e
        consultoria para gerar mais impacto no resultado da sua empresa, com
        tecnologia e inovação.
      </h4>
    </div>
    <div class="image-container">
      <AsideBanner />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes banner {
  0% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-15deg);
  }
}

strong {
  font-weight: 800;
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  align-items: center;
}

.header {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: unset;
  margin-right: 20px;
  padding-left: 100px;
}

.header h1 {
  max-width: 500px;
  font-size: 2rem;
  font-weight: 700;
  margin: 20px 0;
  line-height: 50px;
}

.header h4 {
  /* font-weight: 300; */
  font-size: 1.2rem;
  color: var(--gray-light);
  text-align: center;
  margin: 20px auto;
  max-width: 500px;
  width: 90%;
}

.header h1 span {
  color: var(--primary);
}

.image-container {
  flex: 1;
  min-width: 300px;
  width: 100%;
  z-index: 0;
}

.image-container img {
  height: 400px;
}

.mobile-banner img.mobile-image {
  height: auto;
  width: 100%;
}

@media screen and (max-width: 830px) {
  .aside {
    display: none;
  }
  .header h1 {
    text-align: center;
  }

  .header {
    margin-left: 0;
    padding-left: 0;
  }
}

@media screen and (min-width: 830px) and (max-width: 1096px) {
  .header h1 {
    z-index: 10;
    font-weight: 700;
  }

  .header h4 {
    color: var(--gray-light);
    text-align: left !important;
  }

  .aside {
    display: flex;
    flex-direction: column;
    width: 70%;
    animation: banner 2.5s infinite ease-in-out alternate;
    padding-right: 40px;
  }

  .aside img.aside-banner {
    height: auto;
    width: 80% !important;
  }
}

@media screen and (min-width: 830px) {
  .header .mobile-image {
    display: none;
  }

  .header h1 {
    z-index: 10;
    font-weight: 700;
    width: 100%;
  }
  .header h4 {
    color: var(--gray-light);
    max-width: 600px;
    padding-right: 0;
    margin-bottom: 50px;
    text-align: left !important;
  }
  .aside {
    display: flex;
    flex-direction: column;
    width: 70%;
    animation: banner 2.5s infinite ease-in-out alternate;
  }
  .aside img.aside-banner {
    height: auto;
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .header img {
    width: 100%;
    margin-bottom: -55px;
  }
}
</style>