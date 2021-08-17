<template>
  <div class="fourth-section-container">
    <div class="fourth-section-header">
      <h2>Quem Usa Nossas Soluções e Serviços</h2>
    </div>

    <div class="all-companies">
      <img
        v-for="item in customers"
        :key="item.id"
        :src="item.imageUrl"
        :alt="item.name"
        srcset=""
      />
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
</style>