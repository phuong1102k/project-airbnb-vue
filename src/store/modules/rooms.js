import {
  getRoomsListByLocationAPI,
  getRoomDetailAPI,
  bookingRoomAPI,
  getBookedListAtRoomAPI,
} from "@/api/rooms";

const state = () => {
  return {
    roomList: [],
    roomDetail: {},
    bookingRoom: {},
    bookedList: [],
  };
};

const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  },

  setBookingRoomMutation(state, payload) {
    state.bookingRoom = payload;
  },

  setBookedListAtRoomMutation(state, payload) {
    state.bookedList = payload;
  },
};

const actions = {
  async getRoomListAction(context, payload) {
    const data = await getRoomsListByLocationAPI(payload); //locationId
    context.commit("setRoomListMutation", data);
  },

  async getRoomDetailAction({ commit }, payload) {
    const roomDetail = await getRoomDetailAPI(payload); //roomId
    commit("setRoomDetailMutation", roomDetail);
  },

  async getBookedListAtRoomAction({ commit }, payload) {
    const bookedList = await getBookedListAtRoomAPI(payload);
    commit("setBookedListAtRoomMutation", bookedList);
  },

  async bookingRoomAction({ commit }, { data, router }) {
    const bookingRoom = await bookingRoomAPI(data); //data booking
    router.push("/book-complete");
    commit("setBookingRoomMutation", bookingRoom);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
