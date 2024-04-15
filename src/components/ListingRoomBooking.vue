<template>
  <!-- Listings Container -->
  <div class="row">
    <!-- Listing Item -->
    <div
      class="col-lg-12 col-md-12"
      v-for="(roomItem, index) in roomsByUser"
      :key="index"
    >
      <room-item :room="roomItem"></room-item>
    </div>
    <!-- Listing Item / End -->

    <div class="col-md-12 browse-all-user-listings">
      <button @click="browseAll" v-if="show">
        Browse All Listings <i class="fa fa-angle-right"></i>
      </button>
    </div>
  </div>
  <!-- Listings Container / End -->
</template>
<script>
import { computed } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
import RoomItem from "@/components/RoomItem.vue";
// import { useRoute } from "vue-router";

export default {
  name: "ListingRoomBookingView",
  components: {
    RoomItem,
  },
  props: {
    user: {},
  },

  setup(props) {
    const store = useStore();
    // const route = useRoute();
    const roomsByUser = computed(() => store.state.tickets.roomsByUser);
    // const userLogin = computed(() => store.state.auth.userLogin);
    const show = ref(1);
    console.log(props.user.user.id);
    const browseAll = () => {
      store.dispatch(
        "tickets/getFullTicketListByUserAction",
        props.user.user.id
      );
      show.value = 0;
    };
    return {
      roomsByUser,
      browseAll,
      show,
    };
  },
};
</script>
