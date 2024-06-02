import { createRouter, createWebHistory } from "vue-router";
import { VueCookieNext } from "vue-cookie-next";

import InicioView from "../views/InicioView.vue";
import LoginC from "../views/LoginC.vue";
import RegistrarView from "../views/RegistrarView.vue";
import PerfilUsuarioView from "../views/PerfilUsuarioView.vue";
import AsociacionView from "../views/AsociacionView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: InicioView,
      meta: {
        isAuthRequired: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginC,
      meta: {
        isAuthRequired: false,
      },
    },
    {
      path: "/registrar",
      name: "registrar",
      component: RegistrarView,
      meta: {
        isAuthRequired: false,
      },
    },
    {
      path: "/perfil",
      name: "perfil",
      component: PerfilUsuarioView,
      meta: {
        isAuthRequired: true,
      },
    },
    {
      path: "/asociaciones/:id",
      name: "asociaciones",
      component: AsociacionView,
      meta: {
        isAuthRequired: false,
      },
    }
  ],
});

// const cookiess = useCookie() -> solo se usa en componentes funcionales
router.beforeEach((to, _from, next) => {
  const isAuthRequired = to.meta.isAuthRequired;
  const isAuth = VueCookieNext.getCookie("token");
  if (isAuthRequired && !isAuth) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
