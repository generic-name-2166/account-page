<script setup lang="ts">
interface InputFieldProps {
  label: string;
  number?: boolean;
  required?: boolean;
  name?: string;
}
const props = defineProps<InputFieldProps>();
const type_: HTMLInputElement["type"] = props.number ? "number" : "text";
</script>

<template>
  <div class="rounded border px-3 py-2">
    <div class="relative mt-5 flex flex-col text-gray-500">
      <input
        :type="type_"
        :class="$style.input"
        placeholder=" "
        :required="props.required"
        :name="props.name"
      />
      <label :class="$style.label">
        {{ props.label }}
      </label>
    </div>
  </div>
</template>

<style lang="css" module>
/* 
https://github.com/tailwindlabs/tailwindcss-intellisense/issues/991 
https://stackoverflow.com/a/52335352
*/
.input {
  @apply mb-1 ml-1 border-none focus:outline-none;
}

.label {
  transition:
    margin 0.2s ease,
    color 0.2s ease,
    font-size 0.2s ease;
  @apply pointer-events-none absolute bottom-1 left-1 text-base;
}

.input:focus + .label,
.input:active + .label,
.input:not(:placeholder-shown) + .label {
  @apply pointer-events-auto mb-5 text-sm outline-2;
}
</style>
