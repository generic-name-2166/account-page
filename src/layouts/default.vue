<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
