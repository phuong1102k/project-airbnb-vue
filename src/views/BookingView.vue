<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Titlebar
================================================== -->
    <div id="titlebar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Booking</h2>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li>Booking</li>
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
        <!-- Content
		================================================== -->
        <div class="col-lg-8 col-md-8 padding-right-30">
          <h3 class="margin-top-0 margin-bottom-30">Booking Details</h3>

          <div class="row">
            <div class="col-md-6">
              <div class="input-with-icon medium-icons">
                <label>Check In</label>
                <input
                  type="date"
                  :min="minCheckIn"
                  :max="maxCheckIn"
                  placeholder="dd-mm-yyyy"
                  v-model="timeRequest.checkIn"
                />
                <!-- <input type="date" v-model="timeRequest.checkIn" /> -->
                <i class="im im-icon-Calendar-4"></i>
              </div>
            </div>

            <div class="col-md-6">
              <div class="input-with-icon medium-icons">
                <label>Check Out</label>
                <input
                  type="date"
                  v-model="timeRequest.checkOut"
                  :min="minCheckOut"
                  :max="maxCheckOut"
                />
                <i class="im im-icon-Calendar-4"></i>
              </div>
            </div>
          </div>

          <h3 class="margin-top-55 margin-bottom-30">Payment Method</h3>

          <!-- Payment Methods Accordion -->
          <div class="payment">
            <div class="payment-tab payment-tab-active">
              <div class="payment-tab-trigger">
                <input
                  checked
                  id="paypal"
                  name="cardType"
                  type="radio"
                  value="paypal"
                />
                <label for="paypal">PayPal</label>
                <img
                  class="payment-logo paypal"
                  src="https://i.imgur.com/ApBxkXU.png"
                  alt=""
                />
              </div>

              <div class="payment-tab-content">
                <p>You will be redirected to PayPal to complete payment.</p>
              </div>
            </div>

            <div class="payment-tab">
              <div class="payment-tab-trigger">
                <input
                  type="radio"
                  name="cardType"
                  id="creditCart"
                  value="creditCard"
                />
                <label for="creditCart">Credit / Debit Card</label>
                <img
                  class="payment-logo"
                  src="https://i.imgur.com/IHEKLgm.png"
                  alt=""
                />
              </div>

              <div class="payment-tab-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card-label">
                      <label for="nameOnCard">Name on Card</label>
                      <input
                        id="nameOnCard"
                        name="nameOnCard"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card-label">
                      <label for="cardNumber">Card Number</label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234  5678  9876  5432"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="expirynDate">Expiry Month</label>
                      <input
                        id="expiryDate"
                        placeholder="MM"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="expiryDate">Expiry Year</label>
                      <input
                        id="expirynDate"
                        placeholder="YY"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="cvv">CVV</label>
                      <input id="cvv" required type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Payment Methods Accordion / End -->

          <button
            class="button booking-confirmation-btn margin-top-40 margin-bottom-65"
            @click="handleBooking"
          >
            Confirm and Pay
          </button>
        </div>

        <!-- Sidebar
		================================================== -->
        <div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">
          <!-- Booking Summary -->
          <div class="listing-item-container compact order-summary-widget">
            <div class="listing-item">
              <img :src="roomDetail.image" alt="" />

              <div class="listing-item-content">
                <div class="numerical-rating" data-rating="5.0"></div>
                <h3>{{ roomDetail.name }}</h3>
                <span>{{ roomDetail.province }}, {{ roomDetail.country }}</span>
              </div>
            </div>
          </div>
          <div class="boxed-widget opening-hours summary margin-top-0">
            <h3><i class="fa fa-calendar-check-o"></i> Booking Summary</h3>
            <ul>
              <li>Date <span>10/20/2019</span></li>
              <li>Hour <span>5:30 PM</span></li>
              <li>Guests <span>2 Adults</span></li>
              <li class="total-costs">
                Total Cost <span>{{ roomDetail.price }} VND</span>
              </li>
            </ul>
          </div>
          <!-- Booking Summary / End -->
        </div>
      </div>
    </div>
    <!-- Container / End -->
  </div>
  <!-- Wrapper / End -->
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed, reactive, ref } from "vue";

export default {
  name: "BookingView",
  components: {},
  beforeCreate() {
    this.maxCheckIn = this.getMaxCheckIn();
    this.minCheckIn = this.getMinCheckIn();
    this.minCheckOut = this.getMinCheckOut();
    this.maxCheckOut = this.getMaxCheckIn();
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const today = new Date();
    const minCheckIn = ref();
    const minCheckOut = ref();
    const maxCheckIn = ref();
    const maxCheckOut = ref();

    store.dispatch("rooms/getRoomDetailAction", route.params.roomId);
    const roomDetail = computed(() => store.state.rooms.roomDetail);

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    const userLogin = computed(() => store.state.auth.userLogin);

    store.dispatch("rooms/getBookedListAtRoomAction", route.params.roomId);
    const bookedList = computed(() => store.state.rooms.bookedList);

    const getMinCheckIn = () => {
      let year = today.getFullYear();
      let month = String(today.getMonth() + 1).padStart(2, "0"); // Cần thêm 1 vào vì tháng trong JavaScript bắt đầu từ 0
      let day = String(today.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      return formattedDate;
    };

    const getMaxCheckIn = () => {
      const futureDate = new Date(today);
      futureDate.setDate(futureDate.getDate() + 30);

      let year = futureDate.getFullYear();
      let month = String(futureDate.getMonth() + 1).padStart(2, "0"); // Cần thêm 1 vào vì tháng trong JavaScript bắt đầu từ 0
      let day = String(futureDate.getDate()).padStart(2, "0");
      const formattedFutureDate = `${year}-${month}-${day}`;

      return formattedFutureDate;
    };

    // var dateCO = ``;

    // switch (mm) {
    //   case 1:
    //   case 3:
    //   case 5:
    //   case 7:
    //   case 8:
    //   case 10:
    //   case 12:
    //     if (dd == 31) {
    //       dateCO = `${yyyy}-${String(mm + 1).padStart(2, "0")}-1`;
    //     } else {
    //       dateCO = `${yyyy}-${String(mm).padStart(2, "0")}-${String(
    //         dd + 1
    //       ).padStart(2, "0")}`;
    //     }
    //     break;

    //   case 2:
    //     if ((yyyy % 4 == 0 && dd == 29) || (yyyy % 4 != 0 && dd == 28)) {
    //       dateCO = `${yyyy}-3-1`;
    //     }
    //     break;

    //   case 4:
    //   case 6:
    //   case 9:
    //   case 11:
    //     if (dd == 30) {
    //       dateCO = `${yyyy}-${String(mm + 1).padStart(2, "0")}-1`;
    //     } else {
    //       dateCO = `${yyyy}-${String(mm).padStart(2, "0")}-${String(
    //         dd + 1
    //       ).padStart(2, "0")}`;
    //     }
    //     break;
    // }

    const getMinCheckOut = () => {
      const futureDate = new Date(today);

      futureDate.setDate(futureDate.getDate() + 1);

      let year = futureDate.getFullYear();
      let month = String(futureDate.getMonth() + 1).padStart(2, "0"); // Cần thêm 1 vào vì tháng trong JavaScript bắt đầu từ 0
      let day = String(futureDate.getDate()).padStart(2, "0");
      const formattedDateAfter = `${year}-${month}-${day}`;

      return formattedDateAfter;
    };

    // Định dạng lại thành chuỗi yyyy-mm-dd

    const timeRequest = reactive({
      checkIn: "",
      checkOut: "",
    });
    const handleBooking = () => {
      const data = {
        userId: userLogin.value.user.id,
        roomId: route.params.roomId,
        checkIn: timeRequest.checkIn + "T14:00:00.000+00:00",
        checkOut: timeRequest.checkOut + "T12:00:00.000+00:00",
      };
      store.dispatch("rooms/bookingRoomAction", { data, router });

      //   tránh tình trạng đăng nhập nhiều -> lưu tt người dùng vào store và local storage
    };
    return {
      roomDetail,
      handleBooking,
      timeRequest,
      bookedList,
      minCheckIn,
      minCheckOut,
      maxCheckIn,
      maxCheckOut,
      getMinCheckIn,
      getMaxCheckIn,
      getMinCheckOut,
      // minCheck,
    };
  },
};
</script>
<style lang="scss"></style>
