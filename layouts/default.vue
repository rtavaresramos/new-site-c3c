<template>
  <div :class="`container ${theme}`">
    <ChangeTheme @changeTheme="changeTheme" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: "C3C Software",
    link: [
      {
        rel: "stylesheet",
        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
        integrity:
          "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      theme: null,
    };
  },
  beforeMount() {
    let theme = localStorage.getItem("themeDefault");
    this.changeTheme(theme);
  },
  methods: {
    changeTheme(evt) {
      if (evt === "true" || evt === true) {
        this.theme = "dark";
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        this.theme = "light";
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap");
:root {
  /* --light: #f8f8f8;

  --gray-light: rgba(0, 0, 0, 0.6);
  --gray-dark: rgba(0, 0, 0, 0.8);

  --primary: #2978ff;
  --secundary: #bcfbf0;

  --background: #ffffff;
  --background-default: #f3f6fa;

  --moon: #f1c40f;
  --sun: #f39c12;

  --svg-maximize: #50d86a;
  --svg-minimize: #ffa10b;
  --svg-close: #e24444;

  --folder-primary: #2978ff;
  --folder-secundary: #83aef9; */
  --spacing: 0.4em;
  --mont: "Montserrat", sans-serif;
}

.container.dark {
  --light: #f8f8f8;

  --gray-light: rgba(255, 255, 255, 0.6);
  --gray-dark: rgba(255, 255, 255, 1);

  --primary: #48cdb7;
  --secundary: #404040;

  --background: #303030;
  --background-default: #1a1a1a;

  --moon: #fff;
  --sun: #fff;

  --svg-maximize: #50d86a;
  --svg-minimize: #ffa10b;
  --svg-close: #e24444;

  --folder-primary: #48cdb7;
  --folder-secundary: #7df5e1;
}

.container.light {
  --light: #f8f8f8;

  --gray-light: rgba(0, 0, 0, 0.6);
  --gray-dark: rgba(0, 0, 0, 0.8);

  --primary: #2978ff;
  --secundary: #bcfbf0;

  --background: #fff;
  --background-default: #f3f6fa;

  --moon: #f1c40f;
  --sun: #f39c12;

  --svg-maximize: #50d86a;
  --svg-minimize: #ffa10b;
  --svg-close: #e24444;

  --folder-primary: #2978ff;
  --folder-secundary: #83aef9;
}

.container {
  background: var(--background-default);
  margin: 0 auto;
}

h1,
h2,
h3 {
  color: var(--gray-dark);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

@font-face {
  font-family: "Open Sans", sans-serif;
  src: url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");
}

body,
html,
* {
  font-family: var(--mont);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  scroll-behavior: smooth;
}

body {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 10px;
  overflow: hidden auto;
}

body.light {
  background: #f3f6fa;
}
body.dark {
  background: #1a1a1a;
}

a {
  text-decoration: none;
}

.white {
  color: white;
}

.container {
  max-width: 1368px !important;
  margin: 0 auto;
}

.text-start {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-end {
  text-align: right;
}

.d-flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.d-flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

/* Imagens */

.avatar {
  overflow: hidden;
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.avatar img {
  width: 100%;
}

.company-logo img {
  width: 26.4em;
}

.to-upper {
  text-transform: uppercase;
}

/* Margins em todas as direções*/

.m-1 {
  margin: var(--spacing);
}

.m-2 {
  margin: calc(2 * var(--spacing));
}

.m-3 {
  margin: calc(3 * var(--spacing));
}

.m-4 {
  margin: calc(4 * var(--spacing));
}

.m-5 {
  margin: calc(5 * var(--spacing));
}

.m-6 {
  margin: calc(6 * var(--spacing));
}

.m-7 {
  margin: calc(7 * var(--spacing));
}

.m-8 {
  margin: calc(8 * var(--spacing));
}

.m-9 {
  margin: calc(9 * var(--spacing));
}

.m-10 {
  margin: calc(10 * var(--spacing));
}

.m-11 {
  margin: calc(11 * var(--spacing));
}

.m-12 {
  margin: calc(12 * var(--spacing));
}

.m-13 {
  margin: calc(13 * var(--spacing));
}

.m-14 {
  margin: calc(14 * var(--spacing));
}

.m-15 {
  margin: calc(15 * var(--spacing));
}

.m-16 {
  margin: calc(16 * var(--spacing));
}

.mx-1 {
  margin: 0 var(--spacing);
}

.mx-2 {
  margin: 0 calc(2 * var(--spacing));
}

.mx-3 {
  margin: 0 calc(3 * var(--spacing));
}

.mx-4 {
  margin: 0 calc(4 * var(--spacing));
}

.mx-5 {
  margin: 0 calc(5 * var(--spacing));
}

.mx-6 {
  margin: 0 calc(6 * var(--spacing));
}

.mx-7 {
  margin: 0 calc(7 * var(--spacing));
}

.mx-8 {
  margin: 0 calc(8 * var(--spacing));
}

.mx-9 {
  margin: 0 calc(9 * var(--spacing));
}

.mx-10 {
  margin: 0 calc(10 * var(--spacing));
}

.mx-11 {
  margin: 0 calc(11 * var(--spacing));
}

.mx-12 {
  margin: 0 calc(12 * var(--spacing));
}

.mx-13 {
  margin: 0 calc(13 * var(--spacing));
}

.mx-14 {
  margin: 0 calc(14 * var(--spacing));
}

.mx-15 {
  margin: 0 calc(15 * var(--spacing));
}

.mx-16 {
  margin: 0 calc(16 * var(--spacing));
}

.ml-1 {
  margin-left: var(--spacing);
}

.ml-2 {
  margin-left: calc(2 * var(--spacing));
}

.ml-3 {
  margin-left: calc(3 * var(--spacing));
}

.ml-4 {
  margin-left: calc(4 * var(--spacing));
}

.ml-5 {
  margin-left: calc(5 * var(--spacing));
}

.ml-6 {
  margin-left: calc(6 * var(--spacing));
}

.ml-7 {
  margin-left: calc(7 * var(--spacing));
}

.ml-8 {
  margin-left: calc(8 * var(--spacing));
}

.ml-9 {
  margin-left: calc(9 * var(--spacing));
}

.ml-10 {
  margin-left: calc(10 * var(--spacing));
}

.ml-11 {
  margin-left: calc(11 * var(--spacing));
}

.ml-12 {
  margin-left: calc(12 * var(--spacing));
}

.ml-13 {
  margin-left: calc(13 * var(--spacing));
}

.ml-14 {
  margin-left: calc(14 * var(--spacing));
}

.ml-15 {
  margin-left: calc(15 * var(--spacing));
}

.ml-16 {
  margin-left: calc(16 * var(--spacing));
}

.mr-1 {
  margin-right: var(--spacing);
}

.mr-2 {
  margin-right: calc(2 * var(--spacing));
}

.mr-3 {
  margin-right: calc(3 * var(--spacing));
}

.mr-4 {
  margin-right: calc(4 * var(--spacing));
}

.mr-5 {
  margin-right: calc(5 * var(--spacing));
}

.mr-6 {
  margin-right: calc(6 * var(--spacing));
}

.mr-7 {
  margin-right: calc(7 * var(--spacing));
}

.mr-8 {
  margin-right: calc(8 * var(--spacing));
}

.mr-9 {
  margin-right: calc(9 * var(--spacing));
}

.mr-10 {
  margin-right: calc(10 * var(--spacing));
}

.mr-11 {
  margin-right: calc(11 * var(--spacing));
}

.mr-12 {
  margin-right: calc(12 * var(--spacing));
}

.mr-13 {
  margin-right: calc(13 * var(--spacing));
}

.mr-14 {
  margin-right: calc(14 * var(--spacing));
}

.mr-15 {
  margin-right: calc(15 * var(--spacing));
}

.mr-16 {
  margin-right: calc(16 * var(--spacing));
}

.my-1 {
  margin: 0 var(--spacing);
}

.my-2 {
  margin: calc(2 * var(--spacing)) 0;
}

.my-3 {
  margin: calc(3 * var(--spacing)) 0;
}

.my-4 {
  margin: calc(4 * var(--spacing)) 0;
}

.my-5 {
  margin: calc(5 * var(--spacing)) 0;
}

.my-6 {
  margin: calc(6 * var(--spacing)) 0;
}

.my-7 {
  margin: calc(7 * var(--spacing)) 0;
}

.my-8 {
  margin: calc(8 * var(--spacing)) 0;
}

.my-9 {
  margin: calc(9 * var(--spacing)) 0;
}

.my-10 {
  margin: calc(10 * var(--spacing)) 0;
}

.my-11 {
  margin: calc(11 * var(--spacing)) 0;
}

.my-12 {
  margin: calc(12 * var(--spacing)) 0;
}

.my-13 {
  margin: calc(13 * var(--spacing)) 0;
}

.my-14 {
  margin: calc(14 * var(--spacing)) 0;
}

.my-15 {
  margin: calc(15 * var(--spacing)) 0;
}

.my-16 {
  margin: calc(16 * var(--spacing)) 0;
}

.mt-1 {
  margin-top: 0 var(--spacing);
}

.mt-2 {
  margin-top: calc(2 * var(--spacing));
}

.mt-3 {
  margin-top: calc(3 * var(--spacing));
}

.mt-4 {
  margin-top: calc(4 * var(--spacing));
}

.mt-5 {
  margin-top: calc(5 * var(--spacing));
}

.mt-6 {
  margin-top: calc(6 * var(--spacing));
}

.mt-7 {
  margin-top: calc(7 * var(--spacing));
}

.mt-8 {
  margin-top: calc(8 * var(--spacing));
}

.mt-9 {
  margin-top: calc(9 * var(--spacing));
}

.mt-10 {
  margin-top: calc(10 * var(--spacing));
}

.mt-11 {
  margin-top: calc(11 * var(--spacing));
}

.mt-12 {
  margin-top: calc(12 * var(--spacing));
}

.mt-13 {
  margin-top: calc(13 * var(--spacing));
}

.mt-14 {
  margin-top: calc(14 * var(--spacing));
}

.mt-15 {
  margin-top: calc(15 * var(--spacing));
}

.mt-16 {
  margin-top: calc(16 * var(--spacing));
}

.mb-1 {
  margin-bottom: 0 var(--spacing);
}

.mb-2 {
  margin-bottom: calc(2 * var(--spacing));
}

.mb-3 {
  margin-bottom: calc(3 * var(--spacing));
}

.mb-4 {
  margin-bottom: calc(4 * var(--spacing));
}

.mb-5 {
  margin-bottom: calc(5 * var(--spacing));
}

.mb-6 {
  margin-bottom: calc(6 * var(--spacing));
}

.mb-7 {
  margin-bottom: calc(7 * var(--spacing));
}

.mb-8 {
  margin-bottom: calc(8 * var(--spacing));
}

.mb-9 {
  margin-bottom: calc(9 * var(--spacing));
}

.mb-10 {
  margin-bottom: calc(10 * var(--spacing));
}

.mb-11 {
  margin-bottom: calc(11 * var(--spacing));
}

.mb-12 {
  margin-bottom: calc(12 * var(--spacing));
}

.mb-13 {
  margin-bottom: calc(13 * var(--spacing));
}

.mb-14 {
  margin-bottom: calc(14 * var(--spacing));
}

.mb-15 {
  margin-bottom: calc(15 * var(--spacing));
}

.mb-16 {
  margin-bottom: calc(16 * var(--spacing));
}

/* Padding em todas as Direções */

.p-1 {
  padding: var(--spacing);
}

.p-2 {
  padding: calc(2 * var(--spacing));
}

.p-3 {
  padding: calc(3 * var(--spacing));
}

.p-4 {
  padding: calc(4 * var(--spacing));
}

.p-5 {
  padding: calc(5 * var(--spacing));
}

.p-6 {
  padding: calc(6 * var(--spacing));
}

.p-7 {
  padding: calc(7 * var(--spacing));
}

.p-8 {
  padding: calc(8 * var(--spacing));
}

.p-9 {
  padding: calc(9 * var(--spacing));
}

.p-10 {
  padding: calc(10 * var(--spacing));
}

.p-11 {
  padding: calc(11 * var(--spacing));
}

.p-12 {
  padding: calc(12 * var(--spacing));
}

.p-13 {
  padding: calc(13 * var(--spacing));
}

.p-14 {
  padding: calc(14 * var(--spacing));
}

.p-15 {
  padding: calc(15 * var(--spacing));
}

.p-16 {
  padding: calc(16 * var(--spacing));
}

.px-1 {
  padding: 0 var(--spacing);
}

.px-2 {
  padding: 0 calc(2 * var(--spacing));
}

.px-3 {
  padding: 0 calc(3 * var(--spacing));
}

.px-4 {
  padding: 0 calc(4 * var(--spacing));
}

.px-5 {
  padding: 0 calc(5 * var(--spacing));
}

.px-6 {
  padding: 0 calc(6 * var(--spacing));
}

.px-7 {
  padding: 0 calc(7 * var(--spacing));
}

.px-8 {
  padding: 0 calc(8 * var(--spacing));
}

.px-9 {
  padding: 0 calc(9 * var(--spacing));
}

.px-10 {
  padding: 0 calc(10 * var(--spacing));
}

.px-11 {
  padding: 0 calc(11 * var(--spacing));
}

.px-12 {
  padding: 0 calc(12 * var(--spacing));
}

.px-13 {
  padding: 0 calc(13 * var(--spacing));
}

.px-14 {
  padding: 0 calc(14 * var(--spacing));
}

.px-15 {
  padding: 0 calc(15 * var(--spacing));
}

.px-16 {
  padding: 0 calc(16 * var(--spacing));
}

.py-1 {
  padding: var(--spacing);
}

.py-2 {
  padding: calc(2 * var(--spacing)) 0;
}

.py-3 {
  padding: calc(3 * var(--spacing)) 0;
}

.py-4 {
  padding: calc(4 * var(--spacing)) 0;
}

.py-5 {
  padding: calc(5 * var(--spacing)) 0;
}

.py-6 {
  padding: calc(6 * var(--spacing)) 0;
}

.py-7 {
  padding: calc(7 * var(--spacing)) 0;
}

.py-8 {
  padding: calc(8 * var(--spacing)) 0;
}

.py-9 {
  padding: calc(9 * var(--spacing)) 0;
}

.py-10 {
  padding: calc(10 * var(--spacing)) 0;
}

.py-11 {
  padding: calc(11 * var(--spacing)) 0;
}

.py-12 {
  padding: calc(12 * var(--spacing)) 0;
}

.py-13 {
  padding: calc(13 * var(--spacing)) 0;
}

.py-14 {
  padding: calc(14 * var(--spacing)) 0;
}

.py-15 {
  padding: calc(15 * var(--spacing)) 0;
}

.py-16 {
  padding: calc(16 * var(--spacing)) 0;
}

.pt-1 {
  padding-top: var(--spacing);
}

.pt-2 {
  padding-top: calc(2 * var(--spacing));
}

.pt-3 {
  padding-top: calc(3 * var(--spacing));
}

.pt-4 {
  padding-top: calc(4 * var(--spacing));
}

.pt-5 {
  padding-top: calc(5 * var(--spacing));
}

.pt-6 {
  padding-top: calc(6 * var(--spacing));
}

.pt-7 {
  padding-top: calc(7 * var(--spacing));
}

.pt-8 {
  padding-top: calc(8 * var(--spacing));
}

.pt-9 {
  padding-top: calc(9 * var(--spacing));
}

.pt-10 {
  padding-top: calc(10 * var(--spacing));
}

.pt-11 {
  padding-top: calc(11 * var(--spacing));
}

.pt-12 {
  padding-top: calc(12 * var(--spacing));
}

.pt-13 {
  padding-top: calc(13 * var(--spacing));
}

.pt-14 {
  padding-top: calc(14 * var(--spacing));
}

.pt-15 {
  padding-top: calc(15 * var(--spacing));
}

.pt-16 {
  padding-top: calc(16 * var(--spacing));
}

.pb-1 {
  padding-bottom: var(--spacing);
}

.pb-2 {
  padding-bottom: calc(2 * var(--spacing));
}

.pb-3 {
  padding-bottom: calc(3 * var(--spacing));
}

.pb-4 {
  padding-bottom: calc(4 * var(--spacing));
}

.pb-5 {
  padding-bottom: calc(5 * var(--spacing));
}

.pb-6 {
  padding-bottom: calc(6 * var(--spacing));
}

.pb-7 {
  padding-bottom: calc(7 * var(--spacing));
}

.pb-8 {
  padding-bottom: calc(8 * var(--spacing));
}

.pb-9 {
  padding-bottom: calc(9 * var(--spacing));
}

.pb-10 {
  padding-bottom: calc(10 * var(--spacing));
}

.pb-11 {
  padding-bottom: calc(11 * var(--spacing));
}

.pb-12 {
  padding-bottom: calc(12 * var(--spacing));
}

.pb-13 {
  padding-bottom: calc(13 * var(--spacing));
}

.pb-14 {
  padding-bottom: calc(14 * var(--spacing));
}

.pb-15 {
  padding-bottom: calc(15 * var(--spacing));
}

.pb-16 {
  padding-bottom: calc(16 * var(--spacing));
}

.pl-1 {
  padding-left: var(--spacing);
}

.pl-2 {
  padding-left: calc(2 * var(--spacing));
}

.pl-3 {
  padding-left: calc(3 * var(--spacing));
}

.pl-4 {
  padding-left: calc(4 * var(--spacing));
}

.pl-5 {
  padding-left: calc(5 * var(--spacing));
}

.pl-6 {
  padding-left: calc(6 * var(--spacing));
}

.pl-7 {
  padding-left: calc(7 * var(--spacing));
}

.pl-8 {
  padding-left: calc(8 * var(--spacing));
}

.pl-9 {
  padding-left: calc(9 * var(--spacing));
}

.pl-10 {
  padding-left: calc(10 * var(--spacing));
}

.pl-11 {
  padding-left: calc(11 * var(--spacing));
}

.pl-12 {
  padding-left: calc(12 * var(--spacing));
}

.pl-13 {
  padding-left: calc(13 * var(--spacing));
}

.pl-14 {
  padding-left: calc(14 * var(--spacing));
}

.pl-15 {
  padding-left: calc(15 * var(--spacing));
}

.pl-16 {
  padding-left: calc(16 * var(--spacing));
}

.pr-1 {
  padding-right: var(--spacing);
}

.pr-2 {
  padding-right: calc(2 * var(--spacing));
}

.pr-3 {
  padding-right: calc(3 * var(--spacing));
}

.pr-4 {
  padding-right: calc(4 * var(--spacing));
}

.pr-5 {
  padding-right: calc(5 * var(--spacing));
}

.pr-6 {
  padding-right: calc(6 * var(--spacing));
}

.pr-7 {
  padding-right: calc(7 * var(--spacing));
}

.pr-8 {
  padding-right: calc(8 * var(--spacing));
}

.pr-9 {
  padding-right: calc(9 * var(--spacing));
}

.pr-10 {
  padding-right: calc(10 * var(--spacing));
}

.pr-11 {
  padding-right: calc(11 * var(--spacing));
}

.pr-12 {
  padding-right: calc(12 * var(--spacing));
}

.pr-13 {
  padding-right: calc(13 * var(--spacing));
}

.pr-14 {
  padding-right: calc(14 * var(--spacing));
}

.pr-15 {
  padding-right: calc(15 * var(--spacing));
}

.pr-16 {
  padding-right: calc(16 * var(--spacing));
}
</style>