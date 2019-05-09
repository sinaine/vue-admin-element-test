import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
