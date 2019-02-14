// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { store } from "@/store/store";
import VueSweetalert2 from "vue-sweetalert2";
import VModal from "vue-js-modal";

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674"
};
Vue.use(VueSweetalert2, options);
Vue.use(VModal);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});