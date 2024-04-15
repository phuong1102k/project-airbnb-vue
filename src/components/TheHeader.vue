<template>
  <!-- Header Container
================================================== -->
  <header id="header-container">
    <!-- Header -->
    <div id="header">
      <div class="container">
        <!-- Left Side Content -->
        <div class="left-side">
          <!-- Logo -->
          <div id="logo">
            <router-link to="/"
              ><img
                src="images/logo2.png"
                data-sticky-logo="images/logo.png"
                alt=""
            /></router-link>
          </div>

          <!-- Mobile Navigation -->
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <router-link to="/">Home</router-link>
              </li>

              <li>
                <router-link to="/blog">Blog</router-link>
              </li>

              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->
        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <div class="header-widget">
            <!-- User Menu -->
            <div class="user-menu" v-if="userLogin.user">
              <div class="user-name">
                <span><img :src="userLogin.user.avatar" alt="" /></span>Hi,
                {{ userLogin.user.name }}!
              </div>
              <ul>
                <li>
                  <button @click="handleClickProfile">
                    <i class="sl sl-icon-user"></i> Profile
                  </button>
                </li>
                <!-- <li>
                  <button>
                    <i class="sl sl-icon-envelope-open"></i> Messages
                  </button>
                </li>
                <li>
                  <button>
                    <i class="fa fa-calendar-check-o"></i> Bookings
                  </button>
                </li> -->
                <li>
                  <button @click="handleLogout">
                    <i class="sl sl-icon-power"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
            <span v-else>
              <!-- <router-link to="sign-in" class="sign-in popup-with-zoom-anim"
                ><i class="sl sl-icon-login"></i>Sign In</router-link
              > -->
              <router-link to="/sign-in" class="sign-in"
                ><i class="sl sl-icon-login"></i>Sign In</router-link
              >

              <router-link
                to="/register"
                class="sign-in"
                style="
                  background-color: #f91942;
                  border-radius: 50px;
                  padding: 0 10px;
                  color: #fff;
                "
                ><i class="sl sl-icon-user-follow"></i>Sign Up</router-link
              >
            </span>
          </div>
        </div>
        <!-- Right Side Content / End -->
      </div>
    </div>
    <!-- Header / End -->
  </header>
  <!-- Header Container / End -->
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "TheHeader",
  setup() {
    const store = useStore(); //lấy gtri từ trên store về bằng computed
    const router = useRouter();
    const userLogin = computed(() => store.state.auth.userLogin);

    const handleClickProfile = () => {
      router.push(`/user-profile`);
    };

    const handleLogout = () => {
      localStorage.removeItem("userLogin");
      store.dispatch("auth/loadUserLoginFromLocalStorageAction");
      router.push("/");
    };

    return {
      userLogin,
      handleClickProfile,
      handleLogout,
    };
  },
};
</script>
<style lang="scss">
.user-menu {
  button {
    border: none;
    outline: none;
    background-color: transparent;
    &:hover {
      color: #f91942;
    }
  }
}
</style>
