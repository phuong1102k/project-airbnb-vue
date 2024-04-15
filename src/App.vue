<template>
  <the-header></the-header>
  <router-view />
  <the-footer></the-footer>
  <the-backtotop></the-backtotop>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheBacktotop from "@/components/TheBacktotop.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheBacktotop,
  },
};
</script>

<style lang="scss"></style>
