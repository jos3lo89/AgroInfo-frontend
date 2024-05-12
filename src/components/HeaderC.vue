<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../context/auth.store";
import { logoutF } from "../service/auth.service";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const openMenu = ref(false);

const logout = async () => {
  try {
    await logoutF();
    openMenu.value = !openMenu.value;
    router.push({ name: "login" });
    authStore.token = false;
  } catch (error) {
    console.log(error);
  }
};

const directLogin = () => {
  openMenu.value = !openMenu.value;
  router.push({ name: "login" });
};
</script>

<template>
  <header class="bg-slate-100 flex justify-around py-2 items-center">
    <h1
      class="text-2xl font-mono font-semibold cursor-pointer"
      @click="router.push({ name: 'inicio' })"
    >
      Agro Info
    </h1>
    <div class="flex gap-4 items-center relative">
      <p class="cursor-default" v-if="authStore.token">
        {{ authStore.datosUsuario.nombre }}
      </p>

      <div
        v-if="!authStore.token"
        @click="openMenu = !openMenu"
        class="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
      >
        <svg
          class="absolute w-14 h-14 text-gray-400 left-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <img
        v-else
        @click="openMenu = !openMenu"
        class="cursor-pointer w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        :src="authStore.datosUsuario.foto"
        alt=""
      />
      <div
        v-if="openMenu"
        class="bg-white p-3 rounded-lg absolute top-20 space-y-2 z-10 shadow-lg"
      >
        <button
          v-if="authStore.token"
          class="bg-gray-800 px-2 py-1 rounded-lg outline-none border-none text-sm capitalize text-white"
        >
          mi cuenta
        </button>
        <button
          v-if="authStore.token"
          @click="logout"
          class="bg-red-600 px-2 py-1 rounded-lg outline-none border-none text-sm capitalize text-white"
        >
          cerrar sesion
        </button>
        <button
          v-else
          @click="directLogin"
          class="bg-blue-600 px-2 py-1 rounded-lg outline-none border-none text-sm capitalize text-white min-w-32"
        >
          inciar sesion
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
