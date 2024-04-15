<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Titlebar
================================================== -->
    <div id="titlebar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Booking Processed</h2>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li>Booking Processed</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Content
================================================== -->

    <!-- Container -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="booking-confirmation-page">
            <i class="fa fa-check-circle"></i>
            <h2 class="margin-top-30">Thanks for your booking!</h2>
            <p>
              You'll receive a confirmation email at {{ userLogin.user.email }}
            </p>
            <button class="button margin-top-30 home" @click="backHome">
              Home
            </button>
            <button class="button margin-top-30" @click="viewProfile">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Container / End -->
  </div>
  <!-- Wrapper / End -->
</template>

<script>
// @ is an alias to /src
// import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "BookCompleteView",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    const userLogin = computed(() => store.state.auth.userLogin);
    const viewProfile = () => {
      router.push(`/user-profile`);
    };

    const backHome = () => {
      router.push("/");
    };
    return {
      userLogin,
      viewProfile,
      backHome,
    };
  },
};
</script>
<style lang="scss">
.home {
  background-color: #ddd !important;
}
</style>
