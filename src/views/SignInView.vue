<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-background"
    tabindex="-1"
    style="background-image: url(images/auth-bg.jpg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Sign In</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Login -->
              <div class="tab-content" id="tab1" style="">
                <form class="login" @submit.prevent="handleSubmit">
                  <p class="form-row form-row-wide">
                    <label for="email"
                      >Email:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="email"
                        class="input-text"
                        name="email"
                        id="email"
                        v-model="userLogin.email"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password"
                        id="password"
                        v-model="userLogin.password"
                      />
                    </label>
                    <span class="lost_password">
                      <a href="#">Forgot Your Password?</a>
                    </span>
                  </p>

                  <div class="form-row">
                    <input
                      type="submit"
                      class="button border margin-top-5"
                      name="login"
                      value="Login"
                    />
                    <div class="checkboxes margin-top-10">
                      <input id="remember-me" type="checkbox" name="check" />
                      <label for="remember-me">Remember Me</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "SignInView",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const userLogin = reactive({
      email: "",
      password: "",
    });

    const handleSubmit = () => {
      store.dispatch("auth/signInAction", { data: userLogin, router });
    };

    return {
      userLogin,
      handleSubmit,
    };
  },
};
</script>
<style lang="scss">
.my-background {
  background-size: cover;
  top: 0px;
  position: absolute;
  height: 100vh;
}
</style>
