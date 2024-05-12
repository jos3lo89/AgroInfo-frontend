import { createRouter, createWebHistory } from "vue-router";

import InicioView from "../views/InicioView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: InicioView,
    },
  ],
});

export default router;
