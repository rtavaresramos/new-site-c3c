<template>
  <footer id="contact">
    <div class="footer__container">
      <div class="follow__container">
        <div class="follow__container--text">
          <h1 class="">Siga-nos em..</h1>
        </div>

        <div class="follow__container--links">
          <a
            v-if="github.active"
            class="text-white"
            target="_blank"
            :href="github.link"
            ><i class="fab fa-github fa-3x"></i
          ></a>
          <a
            v-if="facebook.active"
            class="text-white"
            target="_blank"
            :href="facebook.link"
            ><i class="fab fa-facebook-square fa-3x"></i
          ></a>
          <a
            v-if="instagram.active"
            class="text-white"
            target="_blank"
            :href="instagram.link"
            ><i class="fab fa-instagram fa-3x"></i
          ></a>
          <a
            v-if="linkedin.active"
            class="text-white"
            target="_blank"
            :href="linkedin.link"
            ><i class="fab fa-linkedin fa-3x"></i
          ></a>
          <a
            v-if="twitter.active"
            class="text-white"
            target="_blank"
            :href="twitter.link"
            ><i class="fab fa-twitter-square fa-3x"></i
          ></a>
        </div>
      </div>

      <div class="form__container">
        <h1 v-if="!isSubmitted">... ou Solicite o um contato</h1>
        <h1 v-if="isSubmitted">
          Formulário enviado com sucesso! <br />Aguarde o nosso contato.
        </h1>
        <div class="form__group">
          <form
            v-if="!isSubmitted"
            id="contact-form"
            name="contact"
            @submit.prevent="submitForm"
          >
            <input
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Informe seu nome"
              required
            />
            <input
              v-model="form.email"
              type="email"
              name="e-mail"
              placeholder="Informe seu e-mail"
              required
            />
            <textarea
              v-model="form.message"
              name="message"
              placeholder="Informe sua mensagem"
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      isSubmitted: false,
      github: {
        active: null,
        link: "",
      },
      facebook: {
        active: null,
        link: "",
      },
      instagram: {
        active: null,
        link: "",
      },
      linkedin: {
        active: null,
        link: "",
      },
      twitter: {
        active: null,
        link: "",
      },
    };
  },
  mounted() {
    this.getSocial();
  },
  methods: {
    getSocial() {
      const ref = firebase.database().ref("site/social-section");
      ref.on("value", (data) => {
        const values = data.val();
        // arr = Object.keys(values).map((i) => values[i]);
        // console.log("arr", arr);
        this.github = values["github"];
        this.facebook = values["facebook"];
        this.instagram = values["instagram"];
        this.linkedin = values["linkedin"];
        this.twitter = values["twitter"];
      });
    },
    async submitForm() {
      try {
        await this.$axios.$post("", {
          name: this.form.name,
          email: this.form.email,
          msg: this.form.message,
        });
        this.isSubmitted = true;
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style  scoped>
footer {
  color: var(--background);
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  background: var(--primary);
}

footer h1 {
  font-weight: 400;
  color: var(--background);
  padding: 5px;
}
.footer__container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
}
.footer__container h1 {
  margin: 10px auto;
  text-align: center;
  font-size: 1.6rem;
}
.follow__container {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 300px;
  margin: 30px;
  align-items: center;
}
.follow__container i {
  margin: 8px;
}
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  transform: translateX(-15px);
}
form input:-ms-input-placeholder {
  text-align: left;
  border-width: 0;
}
input,
textarea,
button {
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  border: unset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 6px 0;
  padding: 12px;
  max-width: 700px;
  color: var(--gray-light);
  background: var(--background);
}

button {
  color: var(--primary) !important;
}
.form__group {
  width: 100%;
  margin: 16px;
}
form ::-webkit-input-placeholder {
  color: var(--primary);
  font-size: 14px;
  font-weight: 600;
}
button {
  font-size: 18px;
  font-weight: 700;
  width: 200px;
  margin: 8px auto;
}
textarea {
  height: 100px;
}

.form__container {
  flex: 1;
  align-items: center;
}
</style>