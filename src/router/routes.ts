import About from "@/views/about/About.vue";
import Home from "@/views/home/Home.vue";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "/about", component: About },
  {
    path: "/home",
    component: Home,
  },
];
