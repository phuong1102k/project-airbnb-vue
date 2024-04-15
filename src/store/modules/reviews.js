import { getReviewsListAPI } from "@/api/reviews";

const state = () => {
  return {
    reviewList: [],
  };
};

const mutations = {
  setReviewListMutation(state, payload) {
    state.reviewList = payload;
  },
};

const actions = {
  async getReviewListAction(context, payload) {
    const data = await getReviewsListAPI(payload);
    context.commit("setReviewListMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
