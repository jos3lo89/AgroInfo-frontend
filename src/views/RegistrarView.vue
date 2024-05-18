<script setup lang="ts">
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import { registrarI } from "../types/types";
import { registerF } from "../service/auth.service";
import { toast } from "vue3-toastify";

const userData = reactive({} as registrarI);
const confirmPassword = ref("");
const message = ref("");

const registrarUser = async () => {
  try {
    if (userData.clave == confirmPassword.value) {
      const res = await registerF(userData);
      console.log(res);
      message.value = "";

      userData.usuario = "";
      userData.nombre = "";
      userData.apellido = "";
      userData.correo = "";
      userData.clave = "";

      toast.success("Usuario registrado", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      });
    } else {
      console.log("contraseña no coincide");
      message.value = "Las contraseñas no coinciden";
    }
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
  <div class="text-center my-6">
    <h3 class="text-2xl font-semibold">Registro de Usuarios</h3>
  </div>
  <form
    class="max-w-md mx-auto shadow p-4 rounded-lg"
    @submit.prevent="registrarUser"
  >
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
        >Ususario</label
      >
      <input
        v-model="userData.usuario"
        type="text"
        id="usuario"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="lorem"
        required
        autocomplete="off"
      />
    </div>
    <div class="mb-5">
      <label
        for="correoe"
        class="block mb-2 text-sm font-medium text-gray-900 d"
        >Correo electrónico</label
      >
      <input
        v-model="userData.correo"
        type="email"
        id="correoe"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="lorem@lorem.com"
        required
        autocomplete="off"
      />
    </div>
    <div class="mb-5">
      <label
        for="password1"
        class="block mb-2 text-sm font-medium text-gray-900 d"
        >Tu contraseña</label
      >
      <input
        v-model="userData.clave"
        type="text"
        id="password1"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="********"
        required
        autocomplete="off"
      />
    </div>
    <div class="mb-2">
      <label
        for="password2"
        class="block mb-2 text-sm font-medium text-gray-900"
        >Repita su contraseña</label
      >
      <input
        v-model="confirmPassword"
        type="text"
        id="password2"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="********"
        autocomplete="off"
        required
      />
    </div>
    <div v-if="message.length >= 1" class="mb-2 pl-3">
      <span class="text-red-600">{{ message }}</span>
    </div>

    <div class="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label
          for="nombres"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Nombres</label
        >
        <input
          v-model="userData.nombre"
          type="text"
          id="nombres"
          autocomplete="off"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div>
        <label
          for="apellidos"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Apellidos</label
        >
        <input
          v-model="userData.apellido"
          type="text"
          id="apellidos"
          autocomplete="off"
          required

          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
    </div>

    <!-- :disabled="isPasswordConfirmed" -->
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Registrate
    </button>
  </form>
  <div class="text-center my-6">
    <p class="inline">¿Ya tienes una cuenta?</p>
    <RouterLink class="text-blue-600" :to="{ name: 'login' }">
      Inicia sesión aqui.</RouterLink
    >
  </div>
</template>

<style scoped></style>
