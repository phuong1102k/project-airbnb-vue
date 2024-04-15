<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Titlebar
================================================== -->
    <div id="titlebar" class="gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="user-profile-titlebar">
              <div class="user-profile-avatar">
                <img :src="userLogin.user.avatar" alt="" />
              </div>
              <div class="user-profile-name">
                <h2>{{ userLogin.user.name }}</h2>
                <div class="star-rating" data-rating="5">
                  <div class="rating-counter"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content
================================================== -->
    <div class="container">
      <div class="row sticky-wrapper">
        <!-- Sidebar
		================================================== -->
        <div class="col-lg-4 col-md-4 margin-top-0">
          <user-detail-side-bar></user-detail-side-bar>
        </div>
        <!-- Sidebar / End -->

        <!-- Content
		================================================== -->
        <div class="col-lg-8 col-md-8 padding-left-30">
          <h3 class="margin-top-0 margin-bottom-40">
            {{ userLogin.user.name }}'s Listings
          </h3>

          <!-- Listings Container -->
          <listing-room-booking :user="userLogin"></listing-room-booking>
          <!-- Listings Container / End -->
        </div>
      </div>
    </div>
  </div>
  <!-- Wrapper / End -->
</template>
<script>
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import ListingRoomBooking from "@/components/ListingRoomBooking.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "UseProfileView",
  components: { UserDetailSideBar, ListingRoomBooking },
  beforeCreate() {
    this.store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    this.store.dispatch(
      "tickets/getTicketListByUserAction",
      this.userLogin.user.id
    );
    // console.log(this.userLogin);
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const userLogin = computed(() => store.state.auth.userLogin);

    return {
      userLogin,
      route,
      store,
    };
  },
};
</script>
