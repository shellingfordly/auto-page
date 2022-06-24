import Home from "@/views/sys/home/Home.vue";
import About from "@/views/sys/about/About.vue";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
