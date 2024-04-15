import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import RoomsView from "../views/RoomsView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
import ContactView from "../views/ContactView.vue";
import SignInView from "../views/SignInView.vue";
import RegisterView from "../views/RegisterView.vue";
import BookingView from "../views/BookingView.vue";
import BookCompleteView from "../views/BookCompleteView.vue";
import UserProfileView from "../views/UserProfileView.vue";
// import InvoiceView from "../views/InvoiceView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },

  {
    path: "/rooms/:locationId",
    name: "rooms",
    component: RoomsView,
  },

  {
    path: "/room-detail/:roomId",
    name: "roomDetail",
    component: RoomDetailView,
  },

  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },

  {
    path: "/sign-in",
    name: "signIn",
    component: SignInView,
  },

  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

  {
    path: "/booking/:roomId",
    name: "booking",
    component: BookingView,
  },

  {
    path: "/user-profile",
    name: "userProfile",
    component: UserProfileView,
  },

  {
    path: "/book-complete",
    name: "book-complete",
    component: BookCompleteView,
  },

  // {
  //   path: "/invoice",
  //   name: "invoice",
  //   component: InvoiceView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
