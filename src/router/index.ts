import { createRouter, createWebHistory } from "vue-router";
// import JwtService from "../services/jwt.service";

const router = createRouter({
  // @ts-ignore
  mode: "history",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
      meta: { layout: "LayoutDefault",key:'type_exam' },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutAuth", key: "login", },
    },
    {
      path: "/category",
      name: "ListCategory",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault", key: "category" },
    },
    {
      path: "/type_exam",
      name: "ListTypeExam",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault",key: "type_exam", },
    },
    {
      path: "/exam",
      name: "ListExam",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "exam",},
    },
    {
      path: "/draft",
      name: "ListDraft",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "draft",},
    },
    {
      path: "/schedule",
      name: "listSchedule",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "schedule",},
    },
    {
      path: "/company",
      name: "listCompany",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "company",},
    },
  ],
});

// router.beforeEach(async (to, _, next) => {

//   });
export default router;
