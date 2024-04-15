import { createStore } from "vuex";
import location from "./modules/location";
import rooms from "./modules/rooms";
import reviews from "./modules/reviews";
import auth from "./modules/auth";
import tickets from "./modules/tickets";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    rooms,
    reviews,
    auth,
    tickets,
  },
});
