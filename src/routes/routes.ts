import { createRouter, createWebHistory } from "vue-router";

import InicioView from "../views/InicioView.vue";
import LoginC from "../views/LoginC.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: InicioView,
      meta: {
        auth: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginC,
      meta: {
        auth: false,
      },
    },
  ],
});

export default router;
