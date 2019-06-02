<template>
  <div id="app">
    <b-nav id="nav-main" class="justify-content-center sticky-top" b-scrollspy:content>
      <b-nav-item active href="#head" to="#head">Home</b-nav-item>
      <b-nav-item href="#animation" to="#animation">Animation</b-nav-item>
      <b-nav-item href="#gallery" to="#gallery">Galery</b-nav-item>
      <b-nav-item href="#about" to="#about">About Me</b-nav-item>
    </b-nav>
    <div id="content">
      <header id="head">
        <b-container class="h-100">
          <b-row class="h-100">
            <b-col class="h-100">
              <div class="d-flex w-100 h-100 justify-content-center align-items-center">
                <h1>Pandu Wicaksono</h1>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </header>
      <main>
        <section id="animation" style="padding-top: 2em; background: #4592af;">
          <b-container>
            <b-row class="pt-5 pb-5">
              <b-col class="text-center">
                <img src="./assets/anigif.gif" style="width:20em; border-radius: 100%;">
              </b-col>
              <b-col class="text-white text-right align-self-center">
                <h1>An</h1>
                <h1>Web Developer</h1>
                <h2>JavaScript Lover</h2>
                <h4>Data Analyst</h4>
                <h5>R</h5>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section id="animation2" style=" background: #33313b;">
          <b-container>
            <b-row class="pt-5 pb-5">
              <b-col class="text-white align-self-center">
                <h2>Also</h2>
                <h4>UI/UX Designer</h4>
                <h1>Animator</h1>
                <h3>Graphics Designer</h3>
              </b-col>
              <b-col class="text-center">
                <img src="./assets/anigif2.gif" style="width:20em; border-radius: 100%;">
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section id="gallery" style="padding-top: 2em;">
          <b-container>
            <div class="d-flex flex-column justify-content-center w-100 text-center pt-3 pb-3">
              <h1>Galery</h1>
              <b-row class="pb-3">
                <b-col>
                  <img src="./assets/full.jpg" style="width: 20em;">
                </b-col>
                <b-col>
                  <img src="./assets/asli-squad.jpg" style="width: 20em; height: auto;">
                </b-col>
              </b-row>
              <b-row class="pb-3">
                <b-col>
                  <img src="./assets/sunrise.jpg" style="width: 20em; height: auto;">
                </b-col>
                <b-col>
                  <img src="./assets/sunrise-2.jpg" style="width: 20em; height: auto;">
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <img src="./assets/sikil.jpg" style="width: 20em; height: auto;">
                </b-col>
              </b-row>
            </div>
          </b-container>
        </section>
      </main>
      <footer id="about" class="pb-3 pt-3">
        <b-container>
          <b-row>
            <b-col>
              <h1 class="text-center">Find Me At</h1>
            </b-col>
          </b-row>
          <b-row class="text-center p-4">
            <b-col>
              <a href="http://twitter.com/panicks__" target="_blank" rel="noopener noreferrer">
                <v-icon name="twitter"></v-icon>
              </a>
            </b-col>
            <b-col>
              <a
                href="https://www.instagram.com/panicks___/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon name="instagram"></v-icon>
              </a>
            </b-col>
            <b-col>
              <a
                href="https://www.linkedin.com/in/panicks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon name="linkedin"></v-icon>
              </a>
            </b-col>
          </b-row>
        </b-container>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    }
  }
};
</script>

<style lang="scss">
header {
  height: 33em;
  width: 100%;
  background: url("./assets/header.jpg");
  color: white;
  background-size: cover;
  background-position-y: 50%;
}
header h1 {
  padding: 0.5em;
  background: rgba(0, 0, 0, 0.753);
}

ul.nav li a {
  color: white;
}

ul.nav li.nav-item:active {
  background: rgb(51, 51, 51);
}

ul.nav li a:hover {
  color: rgb(36, 120, 255);
  text-decoration: underline;
}

ul.nav {
  background: rgba(27, 27, 27, 0.746);
}

div#app {
  height: 100%;
  width: 100%;
}
footer {
  background: #3333;
}
footer a {
  color: black;
}
footer a > svg {
  width: 5em;
  height: auto;
}
</style>
