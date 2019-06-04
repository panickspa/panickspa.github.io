import Vue from "vue";
import Router from "vue-router";
import components from "./component.js";

Vue.use(Router);

export default new Router({
  title: str => {
    return str;
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: components.header
    },
    {
      path: "/home",
      name: "home2",
      redirect: {
        name: "home"
      }
    },
    {
      path: "/animation",
      name: "animation",
      component: components.animation
    },
    {
      path: "/gallery",
      name: "gallery",
      component: components.gallery
    }
  ]
});
