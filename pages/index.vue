<template>
  <div class="home-page">
    <Navbar />
    <Header />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection />
    <SeventhSection />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      teste: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.teste = window.top.scrollY;
    },
  },
};
</script>
<style scoped>
.step-by-step,
.services-desktop {
  display: none;
}

.teste-y {
  position: absolute;
  top: 100;
  left: 100;
}

h3 {
  font-size: 1.8rem !important;
  color: #393838;
  font-weight: 700;
  width: 200px;
  margin: 0 auto;
  line-height: 60px;
}

.place-services-mobile {
  width: 100vw;
  height: 450px;
  background: var(--primary);
}
.images {
  display: none;
}

.contact {
  width: 90%;
}

.contact a {
  color: #0072c4;
  font-weight: 600;
}

strong.primary {
  color: #0072c4;
}

.button {
  font-size: 1.5rem !important;
  padding: 16px 40px !important;
}

.home-page {
  overflow: hidden !important;
  width: 100vw;
}

@media screen and (max-width: 540px) {
  .home-page {
    width: 100vw;
  }

  .footer {
    margin-bottom: 100px;
  }
}

@media screen and (min-width: 1110px) {
  .services-desktop {
    display: block;
  }
  .services-mobile {
    display: none;
  }
}
@media screen and (min-width: 830px) {
  h3 {
    font-size: 3rem !important;
    color: #393838;
    font-weight: 700;
    width: 200px;
    margin: 0 auto;
    line-height: 60px;
  }

  .mobile {
    display: none;
  }

  .step-by-step-mobile {
    display: none;
  }

  .step-by-step {
    display: flex;
  }

  .place-services-mobile {
    display: none;
  }
}
</style>
