<script setup lang="ts">
import { onMounted, ref } from "vue";
import { changePhoto, getUserF, photoDelete } from "../service/auth.service";
import { perfilI } from "../types/types";
import { toast } from "vue3-toastify";
import { useAuthStore } from "../context/auth.store";

const authStore = useAuthStore();

const openModal = ref(false);

const userData = ref<perfilI>({} as perfilI);
const getUser = async () => {
  try {
    const res = await getUserF();
    userData.value = res.data;
    console.log(res);
  } catch (error: any) {
    console.log(error);
  }
};

onMounted(() => {
  getUser();
});

const borrarImg = async () => {
  try {
    const res = await photoDelete();

    // console.log(res);

    if (res.status == 200) {
      getUser();
      authStore.datosUsuario.foto = res.data.foto;
      toast.success("foto eliminada con éxito", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1500,
      });
    }
  } catch (error: any) {
    // console.log(error);
    error.response.data.message.forEach((err: any) => {
      toast.error(err, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1500,
      });
    });
  }
};

const photoTemp = ref<File | null>(null); 
const fotito = ref("")
const fileInput = ref<HTMLInputElement | null>(null);

const handleChangePhoto = (e: any) => {
  const file = e.target.files[0];
  if (file) {
    photoTemp.value = file;
    fotito.value = URL.createObjectURL(file)
  }
};

const editarFoto = async () => {
  if (photoTemp.value) {
    const formDato = new FormData();
    formDato.append("foto", photoTemp.value);

    try {
      const res = await changePhoto(formDato);
      console.log(res);

      if (res.status == 200) {
        toast.success("foto actualizada con éxito", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1500,
        });
      }

      photoTemp.value = null;
      authStore.datosUsuario.foto = res.data.foto;

      if (fileInput.value) {
        fileInput.value.value = '';
      }

      getUser();
    } catch (error: any) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div class="text-center my-4">
    <h1 class="text-xl capitalize font-semibold">perfil de usuario</h1>
  </div>
  <section
    class="bg-white rounded-lg shadow p-6 my-3 flex justify-between flex-col gap-3 md:flex-row"
  >
    <div class="bg-white rounded-lg shadow p-6">
      <div class="text-center mb-4">
        <h2 class="text-xl capitalize">mis datos</h2>
      </div>
      <div>
        <p class="text-blue-600 my-1">
          usuario: <span class="text-black">{{ userData.usuario }}</span>
        </p>
        <p class="text-blue-600 my-1">
          nombre <span class="text-black">{{ userData.nombre }}</span>
        </p>
        <p class="text-blue-600 my-1">
          apellido <span class="text-black">{{ userData.apellido }}</span>
        </p>
        <p class="text-blue-600 my-1">
          email <span class="text-black">{{ userData.correo }}</span>
        </p>
        <p class="text-blue-600 my-1">
          rol <span class="text-black">{{ userData.rol }}</span>
        </p>
        <p class="text-blue-600 my-1">
          fecha de registro
          <span class="text-black">{{
            new Date(userData.fechaCreacion).toLocaleString()
          }}</span>
        </p>
        <p class="text-blue-600 my-1">
          fecha de actualización
          <span class="text-black">{{
            new Date(userData.fechaActualizado).toLocaleString()
          }}</span>
        </p>
      </div>
      <div class="mt-3">
        <button
          @click="openModal = !openModal"
          class="bg-yellow-600 px-2 py-1 rounded-lg outline-none capitalize text-white hover:bg-yellow-500"
        >
          editar mis datos
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <div class="text-center mb-4">
        <h2 class="text-xl capitalize">mi foto</h2>
      </div>
      <div class="flex flex-col justify-center gap-3 items-center md:flex-row p-4">
        <div>
          <div class="text-center my-3"><p>foto actual</p></div>
          <img :src="userData.foto" alt="" class="rounded-full w-32 h-32" />
        </div>

        <div v-if="photoTemp">
          <div  class="text-center my-3">
            <p>Nueva foto</p>
          </div>
          <img :src="fotito" alt="" class="rounded-full w-32 h-32" />
        </div>
      </div>
      <div class="m-3 flex flex-col justify-center gap-3">
        <button
          @click="borrarImg"
          class="bg-red-600 px-2 py-1 rounded-lg outline-none capitalize text-white hover:bg-red-500 mx-2"
        >
          eliminar mi foto
        </button>
        <input type="file"
        @change="handleChangePhoto"
        ref="fileInput"
          class="bg-yellow-600 px-2 py-1 rounded-lg outline-none capitalize text-white hover:bg-yellow-500 mx-2 file:outline-none file:border-none file:rounded-lg file:my-2 file:text-sm file:text-white file:bg-gray-600"
        >
        </input>

        <div v-if="photoTemp">
          <button @click="editarFoto" class="bg-green-600 px-2 py-1 rounded-lg outline-none capitalize text-white hover:bg-green-500 mx-2">
            actualizar foto
          </button>
        </div>
      </div>
    </div>
  </section>

  <div
    v-if="openModal"
    class="bg-[rgba(0,0,0,.7)] fixed top-0 left-0 w-screen h-screen z-10 flex justify-center items-center"
  >
    <div class="bg-gray-100 rounded-lg shadow p-6 relative">
      <div class="absolute top-0 right-0 bg-white rounded-lg shadow p-1">
        <span @click="openModal = !openModal" class="cursor-pointer">✖️</span>
      </div>
      <div class="text-center my-4">
        <p class="text-xl capitalize">actualizar mi perfil</p>
      </div>
      <div>mis datos aqui</div>
      <div>
        <button
          class="bg-red-600 px-2 py-1 rounded-lg outline-none capitalize text-white hover:bg-red-500"
          @click="openModal = !openModal"
        >
          actualizar mi perfil
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
