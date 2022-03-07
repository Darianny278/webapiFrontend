import Vue from "vue";
import Vuex from "vuex";
import category from "./modules/category";
import media from "./modules/media";
import typeMedia from "./modules/typemedia";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    category,
    media,
    typeMedia
  },
});
