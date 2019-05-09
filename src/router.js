import Vue from "vue";
import Router from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "all"
  },
  {
    path: "/all",
    name: "all",
    component: () => import("@/views/home")
  },
  {
    path: "/active",
    name: "active",
    component: () => import("@/views/home")
  },
  {
    path: "/complated",
    name: "complated",
    component: () => import("@/views/home")
  }
];
const router = new Router({
  routes // (缩写) 相当于 routes: routes
});
Vue.use(Router);
export default router;
