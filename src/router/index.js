import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import EditUserInfo from "@/components/EditUserInfo";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/edit-user/:user",
    name: "EditUserInfo",
    component: EditUserInfo
  }
];

export default new Router({
  mode: "history",
  routes
});