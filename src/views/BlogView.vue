<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-titlebar></the-titlebar>
    <the-blogcontent></the-blogcontent>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
// @ is an alias to /src
import TheTitlebar from "@/components/TheTitlebar.vue";
import TheBlogcontent from "@/components/TheBlogcontent.vue";
import { useStore } from "vuex";
export default {
  name: "BlogView",
  components: {
    TheTitlebar,
    TheBlogcontent,
  },
  setup() {
    const store = useStore();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  },
};
</script>
