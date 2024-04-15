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
            <h3>Sign Up</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Register -->
              <div class="tab-content" id="tab2" style="">
                <form class="register" @submit.prevent="handleSubmit">
                  <!-- name -->
                  <p class="form-row form-row-wide">
                    <label for="username2"
                      >Username:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        v-model="userRegister.name"
                      />
                    </label>
                  </p>
                  <!-- email -->
                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Email Address:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                        v-model="userRegister.email"
                      />
                    </label>
                  </p>
                  <!-- phone -->
                  <p class="form-row form-row-wide">
                    <label for="phoneNum"
                      >Phone number:
                      <i class="im im-icon-Phone-4G"></i>
                      <input
                        class="input-text"
                        type="tel"
                        name="phoneNum"
                        id="phoneNum"
                        v-model="userRegister.phone"
                      />
                    </label>
                  </p>
                  <!-- birthday -->
                  <p class="form-row form-row-wide">
                    <!-- <i class="im im-icon-Cake"></i> -->
                    <label for="birthday"
                      ><Base></Base>Birthday:
                      <div class="birthday">
                        <select v-model="userRegister.day">
                          <option label="Day"></option>
                          <option v-for="(day, index) in arrayDay" :key="index">
                            {{ day }}
                          </option>
                        </select>

                        <select style="" v-model="userRegister.month">
                          <option label="Month"></option>
                          <option
                            v-for="(month, index) in arrayMonth"
                            :key="index"
                          >
                            {{ month }}
                          </option>
                        </select>

                        <select style="" v-model="userRegister.year">
                          <option label="Year"></option>
                          <option
                            v-for="(year, index) in arrayYear"
                            :key="index"
                          >
                            {{ year }}
                          </option>
                        </select>
                      </div>
                    </label>
                  </p>

                  <!-- gender -->
                  <p class="form-row form-row-wide">
                    <label for="gender"
                      >Gender:
                      <select style="" v-model="userRegister.gender">
                        <option label="Gender"></option>
                        <option value="true">Male</option>
                        <option value="false">Female</option>
                      </select>
                    </label>
                  </p>

                  <!-- address -->
                  <p class="form-row form-row-wide">
                    <label for="address"
                      >Address:
                      <i class="im im-icon-Map2"></i>
                      <input
                        class="input-text"
                        type="text"
                        name="address"
                        id="address"
                        v-model="userRegister.address"
                      />
                    </label>
                  </p>

                  <!-- password -->
                  <p class="form-row form-row-wide">
                    <label for="password1"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                        v-model="userRegister.password"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password2"
                      >Repeat Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                        v-model="userRegister.repeatPassword"
                      />
                    </label>
                  </p>

                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="register"
                    value="Register"
                    style="width: 100%"
                  />
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
import { createArrayNumber } from "../utils/createArrayNumber";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "RegisterView",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    // lưu object, giá trị tham chiếu, function
    const arrayDay = createArrayNumber(1, 31);
    const arrayMonth = createArrayNumber(1, 12);
    const arrayYear = createArrayNumber(1970, 2022);

    const userRegister = reactive({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: "",
      day: "",
      month: "",
      year: "",
      gender: "true",
      address: "",
    });

    // gửi dữ liệu lên API
    const handleSubmit = () => {
      if (userRegister.password === userRegister.repeatPassword) {
        //nếu đúng thì call api
        const data = {
          name: userRegister.name,
          email: userRegister.email,
          password: userRegister.password,
          phone: userRegister.phone,
          birthday: `${userRegister.day}/${userRegister.month}/${userRegister.year}`,
          gender: userRegister.gender === "true",
          address: userRegister.address,
        };
        store.dispatch("auth/registerAction", { data, router });
      } else {
        alert("Mật khẩu không khớp");
      }
    };

    return {
      arrayDay,
      arrayMonth,
      arrayYear,
      userRegister,
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
  overflow-y: scroll;
}

.birthday {
  display: flex;
  gap: 15px;
  & select {
    margin-bottom: 0;
  }
}
</style>
