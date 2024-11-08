<script setup lang="ts">
interface ChildSectionProps {
  name: string;
  age: number;
}

const props = defineProps<ChildSectionProps>();
const show = `${props.name}, ${props.age} лет`;
</script>

<template>
  <p class="w-fit rounded bg-gray-200 px-4 py-2 font-bold">
    {{ show }}
  </p>
</template>
