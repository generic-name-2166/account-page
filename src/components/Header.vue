<script setup lang="ts">
import { useRuntimeConfig } from "#app";
import Logo from "./Logo.vue";

const base = useRuntimeConfig().public.base;
const preview = base + "/preview";
</script>

<template>
  <header class="relative flex justify-center border-b-2 py-6 text-gray-500">
    <Logo />

    <div class="grid grid-cols-2 gap-x-36">
      <NuxtLink :to="base" class="hover:underline">Форма</NuxtLink>
      <NuxtLink :to="preview" class="hover:underline">Превью</NuxtLink>
    </div>
  </header>
</template>
