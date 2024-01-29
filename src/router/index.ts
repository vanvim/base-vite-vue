import { createRouter, createWebHistory } from "vue-router";
import JwtService from "../services/jwt.service";

const router = createRouter({
  // @ts-ignore
  mode: "history",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    //   meta: { layout: "LayoutDefault" },
    },
  ],
});

// router.beforeEach(async (to, _, next) => {

//   });
export default router;
