import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import feather from "vue-icon";

Vue.use(feather, {
  name: "v-icon",
  baseClass: "v-icon",
  classPrefix: "v-icon-"
});
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  render: h => h(App)
});
