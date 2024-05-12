<script setup lang="ts">
import { ref } from "vue";

const openMenu = ref(false);
</script>

<template>
  <header class="bg-green-600 flex justify-around py-2 items-center">
    <h1 class="text-2xl text-white font-mono font-semibold">Agro Info</h1>
    <div class="flex gap-4 items-center relative">
      <p class="cursor-default">jos3lo</p>
      <img
        @click="openMenu = !openMenu"
        class="w-16 rounded-full cursor-pointer"
        src="https://i.pinimg.com/564x/b2/25/4f/b2254f4aff845e448160c34a6029098c.jpg"
        alt=""
      />
      <div v-if="openMenu" class="bg-green-600 p-3 rounded-lg absolute top-20 space-y-2 z-10">
        <button
          class="bg-gray-800 px-2 py-1 rounded-lg outline-none border-none text-sm capitalize"
        >
          mi cuenta
        </button>
        <button
          class="bg-red-800 px-2 py-1 rounded-lg outline-none border-none text-sm capitalize"
        >
          cerrar sesion
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
