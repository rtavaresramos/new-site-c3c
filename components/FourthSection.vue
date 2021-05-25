<template>
  <div class="fourth-section-container">
    <div class="fourth-section-header">
      <h2>Quem Usa Nossas Soluções e Serviços</h2>
    </div>

    <div class="all-companies">
      <img src="~assets/svg/company-1.svg" alt="" srcset="" />
      <img src="~assets/svg/company-2.svg" alt="" srcset="" />
      <img src="~assets/svg/company-3.svg" alt="" srcset="" />
      <img src="~assets/svg/company-4.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fourth-section-container {
  padding-top: 70px;
  padding-bottom: 50px;
  width: 85%;
  margin: 50px auto;
}

.fourth-section-container h2 {
  font-size: 1.6rem;
  text-align: right;
}

.fourth-section-container h4 {
  color: var(--gray-light);
  width: 80%;
  margin: 20px auto;
  font-size: 1.2rem;
  text-align: center;
}

.fourth-section-container h3 {
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
}

.all-companies {
  display: flex;
  margin: 40px auto;
  justify-content: space-between;
}

.all-companies img {
  max-height: 80px;
  max-width: 200px;
  filter: grayscale(1);
}
</style>