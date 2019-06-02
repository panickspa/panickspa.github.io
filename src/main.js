import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import feather from "vue-icon";
import VueScrollTo from "vue-scrollto";

console.log(BootstrapVue);

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(feather, {
  name: "v-icon",
  baseClass: "v-icon",
  classPrefix: "v-icon-"
});
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  created() {
    this.$root.$on("bv::scrollspy::activate", this.onActivate);
  },
  methods: {
    onActivate(target) {
      console.log("Receved Event: bv::scrollspy::activate for target ", target);
    }
  },
  render: h => h(App)
});
