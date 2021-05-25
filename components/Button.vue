<template>
  <div class="button" :class="{ 'button-nav': nav }">
    <a v-if="nav" :href="to" target="_blank">
      {{ text }}
    </a>
    <a v-else-if="link" :href="to" target="_blank">
      {{ text }}
    </a>
    <nuxt-link v-else :to="to">
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Saiba Mais",
    },
    to: {
      type: String,
      default: "/servicos",
    },
    nav: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  background: var(--primary);
  padding: 10px 20px;
  border-radius: 8px;
  margin: 0 12px;
  text-align: center;
  max-height: 60px;
}

.button a {
  color: var(--background);
}

.button.button-nav {
  font-size: 1.4rem;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
}

@media screen and (max-width: 350px) {
  .button {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 835px) {
  .button {
    font-size: 1.4rem;
  }
}
</style>