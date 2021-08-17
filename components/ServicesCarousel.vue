<template>
  <div class="carousel-wrapper">
    <span
      v-for="(item, i) in techs"
      :key="item.id"
      :id="`services-options-${i + 1}`"
    ></span>
    <div
      v-for="(item, i) in techs"
      :key="item.id"
      :class="`carousel-services-options services-options-${
        i + 1
      } d-flex flex-col align-center justify-center`"
    >
      <div class="item d-flex justify-between">
        <div class="phone-label">
          <h4>{{ i + 1 }}/{{ techs.length }}</h4>
          <img :src="item.imageUrl" alt="" />
          <h3>{{ item.name }}</h3>
        </div>
        <div class="service-explain">
          <h3>{{ item.name }}</h3>
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>

      <a
        class="arrow arrow-prev"
        :href="`#services-options-${i + 1 == 1 ? techs.length : i - 2}`"
      ></a>
      <a
        class="arrow arrow-next"
        :href="`#services-options-${i + 1 == techs.length ? 1 : i + 2}`"
      ></a>
    </div>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      techs: [],
    };
  },
  mounted() {
    this.getImages();
  },
  methods: {
    getImages() {
      this.techs = [];
      const ref = firebase.database().ref("site/techs");
      ref.on("value", (data) => {
        const values = data.val();
        this.techs = Object.keys(values).map((i) => values[i]);
      });
    },
    checkClick(evt) {
      this.$emit("techForDelete", evt);
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 1rem;
  color: #fff;
  margin-left: 80%;
  margin-bottom: 10px;
  background: var(--primary);
  width: 40px;
  text-align: center;
  border-radius: 4px;
}

p {
  color: var(--gray-dark);
  font-size: 3rem;
}

.item {
  width: 65%;
}

.phone-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-top: 30px;
  height: 250px;
  padding: 20px;
  border-radius: 14px;
  background: var(--background);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;
}

.phone-label img {
  width: 125px;
  margin: 0 auto 14px;
  border-radius: 5px;
}

h3 {
  color: var(--gray-dark);
  text-align: center;
  font-size: 1.2rem;
}

.service-explain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 300px;
  /* margin: 0 25px 0 225px; */
}

.service-explain a {
  color: var(--gray-dark);
  font-size: 1.2rem;
  font-weight: 600;
}
.service-explain p {
  margin-top: 20px;
  color: var(--gray-dark);
  font-size: 1.2rem;
  font-weight: 300;
}

.circles {
  height: 100%;
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
  min-height: 330px;
  max-height: 530px;
  padding: 10px 0;
  height: auto;
  position: relative;
  margin: 0 auto;
}
.carousel-services-options {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px 50px;
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
[id^="services-options"] {
  display: none;
}

.services-options-1 {
  margin: 10px;
  min-width: 280px;
  max-width: 1368px;

  z-index: 2;
  opacity: 1;
}

.services-options-2 {
  margin: 10px;
  min-width: 280px;
  max-width: 1368px;
}

.services-options-3 {
  margin: 10px;
  min-width: 280px;
  max-width: 1368px;
}

.services-options-4 {
  margin: 10px;
  min-width: 280px;
  max-width: 1368px;
}
.services-options-5 {
  margin: 10px;
  min-width: 280px;
  max-width: 1368px;
}

.services-options-6 {
  margin: 10px;
  min-width: 280px;
  max-width: 1368px;
}

*:target ~ .services-options-1 {
  opacity: 0;
}

#services-options-1:target ~ .services-options-1 {
  opacity: 1;
}

#services-options-2:target ~ .services-options-2,
#services-options-3:target ~ .services-options-3,
#services-options-4:target ~ .services-options-4,
#services-options-5:target ~ .services-options-5,
#services-options-6:target ~ .services-options-6 {
  z-index: 3;
  opacity: 1;
}
</style>
