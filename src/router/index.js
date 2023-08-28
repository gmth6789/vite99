import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mission from "../views/Mission.vue";
import Rank from "../views/Rank.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: Home,
  },
  {
    path: "/mission",
    name: "Mission",
    //route level code-splitting
    //this generates a separate chunk (mission.[hash].js) for this router
    //which is lazy-loaded when the route is visited.
    components: () =>
      import(/* webpackChunkName: "mission" */ "../views/Mission.vue"),
  },
  {
    path: "/rank",
    name: "Rank",
    //route level code-splitting
    //this generates a separate chunk (rank.[hash].js) for this router
    //which is lazy-loaded when the route is visited.
    components: () =>
      import(/* webpackChunkName: "rank" */ "../views/Rank.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    //route level code-splitting
    //this generates a separate chunk (profile.[hash].js) for this router
    //which is lazy-loaded when the route is visited.
    components: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    //route level code-splitting
    //this generates a separate chunk (chat.[hash].js) for this router
    //which is lazy-loaded when the route is visited.
    components: () =>
      import(/* webpackChunkName: "chat" */ "../views/Chat.vue"),
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

});

export default router;


