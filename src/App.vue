<template>
  <div id="app">
    <b-nav id="nav-main" class="justify-content-center sticky-top" b-scrollspy:content>
      <b-nav-item active href="/home" to="home">Home</b-nav-item>
      <b-nav-item href="/animation" to="animation">Animation</b-nav-item>
      <b-nav-item href="/gallery" to="gallery">Galery</b-nav-item>
    </b-nav>
    <div id="content">
      <router-view/>
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
                <i class="fab fa-twitter"></i>
              </a>
            </b-col>
            <b-col>
              <a
                href="https://www.instagram.com/panicks___/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </b-col>
            <b-col>
              <a
                href="https://www.linkedin.com/in/panicks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </b-col>
            <b-col>
              <a href="http://line.me/ti/p/~ndngkroktghdln">
                <i class="fab fa-line"></i>
              </a>
            </b-col>
          </b-row>
        </b-container>
      </footer>
      <section id="copy">
        <div class="w-100 text-center">
          thanks to
          <i class="fab fa-font-awesome" aria-hidden="true"></i> Font Awesome,
          <i class="fab fa-bootstrap" aria-hidden="true"></i> Bootstrap,
          <i class="fab fa-vuejs" aria-hidden="true"></i> VueJs
        </div>
      </section>
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
header .paragraph {
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
footer a > i {
  font-size: 5em;
}
</style>
