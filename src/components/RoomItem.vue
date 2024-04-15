<template>
  <div class="listing-item-container list-layout">
    <a class="listing-item">
      <!-- Image -->
      <div class="listing-item-image">
        <img :src="room.room.image" alt="" />
        <span class="tag">{{ room.room.tag }}</span>
      </div>

      <!-- Content -->
      <div class="listing-item-content">
        <div class="listing-badge now-open">Now Open</div>

        <div class="listing-item-inner">
          <h3>{{ room.room.name }}</h3>
          <span>{{ room.room.country }}</span>
          <div class="star-rating" data-rating="3.5">
            <div class="rating-counter">{{ room.room.price }}VND</div>
          </div>
        </div>

        <span class="like-icon"></span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "RoomItem",
  components: {},
  props: {
    room: {
      type: Object,
    },
  },
};
</script>
