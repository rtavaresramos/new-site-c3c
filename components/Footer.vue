<template>
  <footer id="contact">
    <div class="footer__container">
      <div class="follow__container">
        <div class="follow__container--text">
          <h1 class="">Siga-nos em..</h1>
        </div>

        <div class="follow__container--links">
          <a
            class="text-white"
            target="_blank"
            href="https://github.com/c3csoftware"
            ><i class="fab fa-github fa-3x"></i
          ></a>
          <a
            class="text-white"
            target="_blank"
            href="https://www.facebook.com/rodrigokxd99"
            ><i class="fab fa-facebook-square fa-3x"></i
          ></a>
          <a
            class="text-white"
            target="_blank"
            href="https://www.instagram.com/c3csoftware/"
            ><i class="fab fa-instagram fa-3x"></i
          ></a>
          <a
            class="text-white"
            target="_blank"
            href="https://www.linkedin.com/in/c3csoftware95/"
            ><i class="fab fa-linkedin fa-3x"></i
          ></a>
          <a
            class="text-white"
            target="_blank"
            href="https://twitter.com/c3csoftware"
            ><i class="fab fa-twitter-square fa-3x"></i
          ></a>
        </div>
      </div>

      <div class="form__container">
        <h1>... ou Solicite o um contato</h1>
        <div class="form__group">
          <form
            id="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input
              type="text"
              name="name"
              placeholder="Informe seu nome"
              required
            />
            <input
              type="email"
              name="e-mail"
              placeholder="Informe seu e-mail"
              required
            />
            <textarea
              name="message"
              placeholder="Informe sua mensagem"
              required
            ></textarea>

            <button class="">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
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
  border-radius: 4px;
  border: unset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 6px 0;
  padding: 12px;
  max-width: 700px;
  color: var(--primary);
  background: var(--background);
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