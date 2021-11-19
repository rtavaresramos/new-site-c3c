<template>
  <div class="fourth-section-container">
    <div class="fourth-section-header">
      <h2>Quem Usa Nossas Soluções e Serviços</h2>
    </div>
<!-- 
    <div class="all-companies">
      <img
        v-for="item in customers"
        :key="item.id"
        :src="item.imageUrl"
        alt=""
        srcset=""
      />
    </div>
  </div> -->

  <div class="carousel-wrapper">
    <span
      v-for="(item, i) in customers"
      :key="item.id"
      :id="`customers-options-${i + 1}`"
    ></span>
    <div
      v-for="(item, i) in customers"
      :key="item.id"
      :class="`carousel-customers-options customers-options-${
        i + 1
      } d-flex flex-col align-center justify-center`"
    >
      <div class="item d-flex justify-between">
        <div class="all-companies">
      <img
        :key="item.id"
        :src="item.imageUrl"
        alt=""
        srcset=""
      />
    </div>
      </div>

      <a
        class="arrow arrow-prev"
        :href="`#customers-options-${i + 1 == 1 ? customers.length : i - 2}`"
      ></a>
      <a
        class="arrow arrow-next"
        :href="`#customers-options-${i + 1 == customers.length ? 1 : i + 2}`"
      ></a>
    </div>
  </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      customers: [],
    };
  },
  mounted() {
    this.getImages();
  },
  methods: {
    getImages() {
      this.customers = [];
      const ref = firebase.database().ref("site/customers");
      ref.on("value", (data) => {
        const values = data.val();
        this.customers = Object.keys(values).map((i) => values[i]);
      });
    },
    checkClick(evt) {
      this.$emit("customerForDelete", evt);
    },
  },
};
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
  flex-wrap: wrap;
  margin: 40px auto;
  justify-content: space-between;
}

.all-companies img {
  max-height: 80px;
  max-width: 200px;
  min-width: 200px;
  margin: 10px auto;
  filter: grayscale(1);
}

.circles {
  margin-top: 30px;
  align-items: flex-end;
}

.circle {
  position: relative;
  min-width: 20px;
  height: 20px;
  background: var(--primary);
  filter: brightness(50%);
  border-radius: 50%;
  margin: 0 4px;
}

.circle.active {
  filter: brightness(100%);
  background: var(--primary);
}

.carousel-wrapper {
  min-height: 80vh;
  padding: 10px 0;
  height: fit-content;
  position: relative;
  margin: 0 auto;
}
.carousel-customers-options {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.arrow {
  border: solid var(--primary);
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
[id^="customers-options"] {
  display: none;
}

.customers-options-1 {
  min-width: 280px;
  max-width: 1368px;

  z-index: 2;
  opacity: 1;
}

.customers-options-2 {
  min-width: 280px;
  max-width: 1368px;
}

.customers-options-3 {
  min-width: 280px;
  max-width: 1368px;
}

.customers-options-4 {
  min-width: 280px;
  max-width: 1368px;
}
.customers-options-5 {
  min-width: 280px;
  max-width: 1368px;
}

.customers-options-6 {
  min-width: 280px;
  max-width: 1368px;
}

*:target ~ .customers-options-1 {
  opacity: 0;
}

#customers-options-1:target ~ .customers-options-1 {
  opacity: 1;
}

#customers-options-2:target ~ .customers-options-2,
#customers-options-3:target ~ .customers-options-3,
#customers-options-4:target ~ .customers-options-4,
#customers-options-5:target ~ .customers-options-5,
#customers-options-6:target ~ .customers-options-6,
#customers-options-7:target ~ .customers-options-7,
#customers-options-8:target ~ .customers-options-8,
#customers-options-9:target ~ .customers-options-9,
#customers-options-10:target ~ .customers-options-10,
#customers-options-11:target ~ .customers-options-11,
#customers-options-12:target ~ .customers-options-12,
#customers-options-13:target ~ .customers-options-13,
#customers-options-14:target ~ .customers-options-14,
#customers-options-15:target ~ .customers-options-15 {
  z-index: 3;
  opacity: 1;
}
</style>