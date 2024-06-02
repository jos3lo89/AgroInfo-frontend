<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();


</script>

<template>
  <section class="flex flex-col md:flex-row gap-3 justify-around items-center my-4">
    <div>
      <img src="https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    <div>
      <h1>Asociación de productores de {{ route.params.id }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        expedita, aliquam, repudiandae, earum neque cumque numquam iste autem
        saepe atque ex inventore commodi soluta harum vel quam consequuntur.
        Molestiae, dignissimos.
      </p>
    </div>
  </section>
  <nav class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-4 place-items-center gap-4">
    <div>
      <button class="bg-green-500 rounded-lg px-2 py-1 border-none outline-none text-white">dato 1</button>
    </div>
    <div>
      <button class="bg-green-500 rounded-lg px-2 py-1 border-none outline-none text-white">dato 2</button>
    </div>
    <div>
      <button class="bg-green-500 rounded-lg px-2 py-1 border-none outline-none text-white">dato 3</button>
    </div>
    <div>
      <button class="bg-green-500 rounded-lg px-2 py-1 border-none outline-none text-white">dato 4</button>
    </div>
    <div>
      <button class="bg-green-500 rounded-lg px-2 py-1 border-none outline-none text-white">dato 5</button>
    </div>
  </nav>
  <div>

  </div>
</template>

<style scoped></style>
