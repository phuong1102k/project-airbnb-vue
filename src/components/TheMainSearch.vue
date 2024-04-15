<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
          id="autocomplete-input"
          type="text"
          placeholder="Location"
          v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <!-- HTML CSS bảng gợi ý -->
      <ul class="list-location" v-if="locationList.length > 0 && keyword">
        <li
          v-for="(location, index) in locationList"
          :key="index"
          @click="handleClickLocation(location)"
        >
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title">{{ location.name }}</span>
        </li>
      </ul>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "TheMainSearch",
  components: {},
  setup() {
    const keyword = ref(""); //hợp lưu dữ liệu thông thường (string, num,null,...)
    const store = useStore();
    const router = useRouter();

    watch(keyword, (newKeyword) => {
      store.dispatch("location/getLocationListAction", newKeyword);
    });
    // các state lấy trên store về phải thông qua computed để tính toán lại
    const locationList = computed(() => store.state.location.locationList);

    const handleClickLocation = (location) => {
      // console.log(location);
      router.push(`/rooms/${location.id}`);
    };

    return {
      keyword,
      locationList,
      handleClickLocation,
    };
  },
};
</script>
<style lang="scss">
.location {
  position: relative;
  .list-location {
    position: absolute;
    top: calc(100% + 20px);
    width: 100%;
    list-style-type: none;
    background-color: #fff;
    color: #222;
    border-radius: 20px;
    padding: 7px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px rgba(27, 31, 35, 0.15) 0px
      0px 0px 1px;
    li {
      padding: 10px;
      font-size: 20px;
      &:hover {
        cursor: pointer;
        background-color: #f7f7f7;
      }

      .location-item-title {
        margin-left: 20px;
      }
    }
  }
}
</style>
