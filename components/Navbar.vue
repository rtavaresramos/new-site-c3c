<template>
  <nav>
    <div class="nav__container">
      <div class="toggle">
        <div class="toggle-hamburger__container">
          <input
            id="toggle-hamburger-input"
            @change="toggleActive()"
            type="checkbox"
            style="display: none"
          />
          <label for="toggle-hamburger-input">
            <div class="toggle-hamburger"></div>
          </label>
        </div>
      </div>
      <nuxt-link to="/" class="logo mb-2">
        <Logo />
      </nuxt-link>
      <div>
        <ul ref="toggleControl" class="toggle-off">
          <nuxt-link to="/servicos" class="desktop">
            <li>Somos a C3C</li>
          </nuxt-link>
          <nuxt-link to="/servicos" class="mobile">
            <li>Somos a C3C</li>
          </nuxt-link>
          <nuxt-link to="/faq" class="desktop">
            <li>Nossas Soluções</li>
          </nuxt-link>
          <nuxt-link to="/faq" class="mobile">
            <li>Nossas Soluções</li>
          </nuxt-link>

          <li class="bigger">
            <Button nav text="Saiba Mais" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleActive() {
      this.$refs.toggleControl.classList.toggle("toggle-off");
      this.$refs.toggleControl.classList.toggle("toggle-on");
      if (this.$refs.toggleControl.classList.contains("toggle-off")) {
        this.$refs.toggleControl.classList.add("desactive");
      }
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  position: relative;
  z-index: 20;
  display: flex;
  height: auto;
  padding: 20px 0;
  background: var(--background);
  justify-content: space-around;
  text-align: center;
  align-items: center;
  box-shadow: rgba(17, 12, 46, 0.1) 0px 4.8px 10px 0px;
}

.mobile {
  display: block;
}

.desktop {
  display: none;
}

.toggle {
  z-index: 15;
  position: absolute;
  font-size: 1.5em;
  display: flex;
  justify-content: flex-end;

  padding: 0 30px;
  right: 0;
  top: 10px;
  background: rgba(0, 0, 0, 0);

  border: unset;
}

.toggle .toggle-hamburger__container {
  display: none;
  padding: 0 12px;
  cursor: pointer;
}

.nav__container {
  display: flex;
  height: 85px;
  transition: all 0.2s;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 100%;
}

.logo {
  margin-top: 10px;
}

.logo {
  width: 200px;
}

ul {
  display: flex;
  width: 500;
  margin-left: 150px;
  text-align: center;
  align-items: center;
}

li {
  list-style: none;
}

ul a li {
  color: var(--gray-dark);
  font-size: 1.4rem;
  margin: 0 10px;
  padding: 10px 10px;
  border-radius: 24px;
  font-weight: 500;
  text-decoration: unset;
}

ul a li:hover {
  filter: brightness(90%);
  color: var(--primary);
}

.toggle-hamburger__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-hamburger {
  position: relative;
  width: 35px;
  height: 35px;
}

.toggle-hamburger:after {
  content: "";
  position: absolute;
  top: 20%;
  left: 5%;
  width: 85%;
  height: 10%;
  background: var(--primary);
  border-radius: 25px;
  transition: 1s ease;
}

.toggle-hamburger:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 25%;
  width: 65%;
  height: 10%;
  background: var(--primary);
  border-radius: 25px;
  transition: 1s ease;
}

#toggle-hamburger-input:checked ~ label .toggle-hamburger:after {
  transform: rotate(225deg);
  top: 45%;
  left: 5%;
}

#toggle-hamburger-input:checked ~ label .toggle-hamburger:before {
  top: 45%;
  left: 5%;
  width: 85%;

  transform: rotate(-405deg);
}

@keyframes toggleFadeIn {
  from {
    height: 0;
  }

  to {
    height: 55vh;
  }
}
@keyframes toggleFadeOut {
  from {
    height: 55vh;
  }

  to {
    height: 0;
  }
}

@media screen and (min-width: 830px) {
  .logo {
    margin-left: 60px;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }
}

@media screen and (max-width: 930px) {
  nav {
    display: flex;
    align-items: center;
    height: 100px;
  }
  nav .logo {
    z-index: 20;
    position: absolute;
  }
  nav .logo img {
    width: 120px;
  }

  .toggle {
    top: 38px;
  }

  .toggle .toggle-hamburger__container {
    display: block;
    color: #fff;
  }

  .toggle-off {
    height: 0;
  }
  .desactive {
    animation: toggleFadeOut 1s;
  }
  .toggle-on {
    height: 55vh;
    animation: toggleFadeIn 1s;
  }
  .toggle--control {
    position: absolute;
    z-index: 30;
  }

  nav ul {
    position: absolute;
    left: -150px;
    z-index: -10;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    margin-top: 50px;
    border-bottom: 3px solid var(--light-color);
    box-shadow: 5px 15px 15px -5px rgba(0, 0, 0, 0.5);
    background: var(--background);
  }

  nav ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50px;
    margin: 0 10px;
    list-style: none;
    padding: 10px 10px;
    border-radius: 4px;
  }
}
</style>
