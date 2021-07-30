<template>
  <div class="change-theme-button">
    <input
      v-model="theme"
      type="checkbox"
      class="checkbox"
      id="chk"
      @change="changeTheme"
    />
    <label class="label" for="chk">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
      <div class="ball"></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: null,
    };
  },
  mounted() {
    this.theme =
      localStorage.getItem("themeDefault") === "false" ? false : true;
    console.log("mounted", this.theme);

    if (this.theme !== undefined && this.theme !== null) {
      this.$emit("changeTheme", this.theme);
    } else {
      this.theme = false;
      this.$emit("changeTheme", this.theme);
    }
  },
  methods: {
    changeTheme() {
      localStorage.setItem("themeDefault", this.theme);
      this.$emit("changeTheme", this.theme);
      console.log("methods", this.theme);
    },
  },
};
</script>

<style  scoped>
.change-theme-button {
  position: fixed;
  bottom: 20px;
  right: 25px;
  z-index: 9999;
}
.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  background-color: var(--background);
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  transform: scale(1.5);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.label .ball {
  background-color: var(--primary);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translateX(24px);
}

.fa-moon {
  color: var(--moon);
}

.fa-sun {
  color: var(--sun);
}
</style>