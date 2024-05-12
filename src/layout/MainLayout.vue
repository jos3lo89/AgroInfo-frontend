<script setup lang="ts">
import HeaderC from "../components/HeaderC.vue";
import FoooterC from "../components/FooterC.vue";
</script>

<template>
  <HeaderC></HeaderC>
  <main class="md:mx-10">
    <slot name="mainSlot1"> </slot>
  </main>
  <FoooterC></FoooterC>
</template>

<style scoped></style>
