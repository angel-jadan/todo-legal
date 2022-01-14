import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Error from "@/views/Error.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },
  ],
});
