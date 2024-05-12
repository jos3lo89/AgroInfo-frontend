import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { authUserI } from "../types/types";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const token = ref(false);

    const datosUsuario = reactive({} as authUserI);

    return { token, datosUsuario };
  },
  { persist: true }
);
