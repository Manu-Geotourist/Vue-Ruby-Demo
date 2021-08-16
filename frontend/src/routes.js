import { createWebHistory, createRouter  } from "vue-router";
import HeloWorld from "@/components/HelloWorld.vue";
import Home from "@/components/Home.vue";

const routes = [
  {
    path: "/hello",
    name: "HeloWorld",
    component: HeloWorld,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
//   history: createWebHashHistory(),
  routes,
});

export default router;