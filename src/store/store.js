import Vue from "vue";
import Vuex from "vuex";
import db from "@/firebase/init";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
Vue.use(Vuex);
Vue.use(db);

export const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters,
  actions
});