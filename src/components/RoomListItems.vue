<template>
  <!-- Listing Item -->
  <div class="col-lg-12 col-md-12">
    <div class="listing-item-container list-layout" data-marker-id="1">
      <div class="listing-item" @click="handleClickRoom">
        <!-- Image -->
        <div class="listing-item-image">
          <img :src="room.image" alt="" />
          <!-- src: room.image -->
          <span class="tag">Eat & Drink</span>
        </div>

        <!-- Content -->
        <div class="listing-item-content">
          <div class="listing-badge now-open">Now Open</div>

          <div class="listing-item-inner">
            <h3>{{ room.name }} <i class="verified-icon"></i></h3>
            <span>{{ room.province }}</span>
            <div class="star-rating" data-rating="3.5">
              <div class="rating-counter">({{ room.bedRoom }} bedroom)</div>
            </div>
          </div>

          <span class="like-icon"></span>

          <div class="listing-item-details">price: {{ room.price }} VND</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Listing Item / End -->
</template>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
export default {
  name: "RoomListItems",
  components: {},
  props: {
    room: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleClickRoom = () => {
      router.push(`/room-detail/${props.room.id}`);
    };
    return {
      handleClickRoom,
    };
  },
};
</script>
