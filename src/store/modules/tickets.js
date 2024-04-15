import {
  getTicketListByUserAPI,
  getFullTicketListByUserAPI,
} from "@/api/tickets";

const state = () => {
  return {
    roomsByUser: [],
  };
};

const mutations = {
  setTicketListByUserMutation(state, payload) {
    const data = payload.map((item) => ({
      id: item.id,
      room: item.room,
      user: item.user,
      checkIn: item.checkIn,
      checkOut: item.checkOut,
    }));
    console.log(data);
    state.roomsByUser = data;
  },
};

const actions = {
  async getTicketListByUserAction(context, payload) {
    const data = await getTicketListByUserAPI(payload);
    context.commit("setTicketListByUserMutation", data);
  },
  async getFullTicketListByUserAction(context, payload) {
    const data = await getFullTicketListByUserAPI(payload);
    context.commit("setTicketListByUserMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
