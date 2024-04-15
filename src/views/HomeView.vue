<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-banner></the-banner>
    <the-categories></the-categories>
    <the-places></the-places>
    <the-reviews></the-reviews>
    <the-plans></the-plans>
    <the-blogs></the-blogs>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
// @ is an alias to /src
import TheBanner from "@/components/TheBanner.vue";
import TheCategories from "@/components/TheCategories.vue";
import ThePlaces from "@/components/ThePlaces.vue";
import TheReviews from "@/components/TheReviews.vue";
import ThePlans from "@/components/ThePlans.vue";
import TheBlogs from "@/components/TheBlogs.vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheReviews,
    ThePlans,
    TheBlogs,
  },
  setup() {
    const store = useStore();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  },
};
</script>
