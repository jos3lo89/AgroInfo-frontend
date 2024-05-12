<script setup lang="ts">
import { reactive } from "vue";
import { loginF } from "../service/auth.service";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import { useAuthStore } from "../context/auth.store";

const authStore = useAuthStore();
const router = useRouter();

const userData = reactive({
  correo: "",
  clave: "",
});

const sendData = async () => {
  try {
    const res = await loginF(userData);
    authStore.token = true;
    authStore.datosUsuario.nombre = res.data.nombre;
    authStore.datosUsuario.foto = res.data.foto;
    router.push({ name: "inicio" });
  } catch (error: any) {
    error.response.data.message.forEach((err: any) => {
      toast.warn(err, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1500,
      });
    });
  }
};
</script>

<template>
  <form
    class="max-w-sm mx-auto shadow p-4 rounded-lg"
    @submit.prevent="sendData"
  >
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
        >Tu correo electrónico</label
      >
      <input
        v-model="userData.correo"
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="lorem@lorem.com"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 d"
        >Tu contraseña</label
      >
      <input
        v-model="userData.clave"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </form>
</template>

<style scoped></style>
