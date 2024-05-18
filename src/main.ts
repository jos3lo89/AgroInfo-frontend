import { createApp } from "vue";
import "./style.css";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import router from "./routes/routes.ts";
import { createPinia } from "pinia";
import piniaPersisted from "pinia-plugin-persistedstate";
import { VueCookieNext } from "vue-cookie-next";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersisted);

app.use(VueCookieNext);
app.use(pinia);
app.use(router);
app.mount("#app");

// cookies config
VueCookieNext.config({ expire: "1d" });

// guardia de rutas
/* import { useAuthStore } from "./context/auth.store.ts";
const authStore = useAuthStore();
router.beforeEach((to) => {
  const isAuth = to.meta.auth;

  if (isAuth && !authStore.token) {
    return { name: "login" };
  }
});
 */