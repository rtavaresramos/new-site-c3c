<template>
  <div class="home-page">
    <Navbar />
    <Header />
    <FirstSection class="desktop" />
    <FirstSectionMobile class="mobile" />
    <SecondSection id="servicos" />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection v-if="sixthSectionControll" />
    <SeventhSection v-if="seventhSectionControll" />
    <Footer id="get-in-touch" />
  </div>
</template>
<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      teste: null,
      sixthSectionControll: null,
      seventhSectionControll: null,
    };
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  mounted() {
    this.getSixthSectionControll();
    this.getSeventhSectionControll();
    window.addEventListener("scroll", this.onScroll);
  },

  methods: {
    getSixthSectionControll() {
      const ref = firebase.database().ref("site/blog-section/controll");
      ref.on("value", (data) => {
        const value = data.val();
        this.sixthSectionControll = value.active;
        console.log(value.active);
      });
    },
    getSeventhSectionControll() {
      const ref = firebase
        .database()
        .ref("site/call-to-action-section/controll");
      ref.on("value", (data) => {
        const value = data.val();
        this.seventhSectionControll = value.active;
        console.log(value.active);
      });
    },

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
  width: 100%;
}

@media screen and (max-width: 829px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}

@media screen and (min-width: 1110px) {
  .desktop {
    display: block;
  }
  .mobile {
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
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}
</style>
