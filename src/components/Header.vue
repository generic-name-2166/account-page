<script setup lang="ts">
import Logo from "./Logo.vue";
</script>

<template>
  <header class="relative flex justify-center border-b-2 py-6 text-gray-500">
    <Logo />

    <div class="grid grid-cols-2 gap-x-36">
      <NuxtLink to="/" class="hover:underline">Форма</NuxtLink>
      <NuxtLink to="/preview" class="hover:underline">Превью</NuxtLink>
    </div>
  </header>
</template>
