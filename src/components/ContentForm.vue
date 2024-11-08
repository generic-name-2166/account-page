<script setup lang="ts">
import InputField from "./InputField.vue";
import PlusIcon from "./PlusIcon.vue";
</script>

<template>
  <main class="flex flex-grow justify-center">
    <form class="space-y-10">
      <fieldset class="space-y-3">
        <legend class="w-full px-0.5 font-semibold">Персональные данные</legend>
        <InputField label="Имя" />
        <InputField label="Возраст" number />
      </fieldset>

      <fieldset
        class="grid grid-cols-[repeat(2,_minmax(0,_5fr))_minmax(0,_1fr)] gap-x-4 gap-y-2"
      >
        <legend
          class="col-span-3 mb-3 flex w-full flex-row items-center justify-between px-0.5 font-semibold"
        >
          <p>Дети (макс. 5)</p>
          <button
            type="button"
            class="block rounded-full border border-blue-500 px-5 py-3 font-normal text-blue-500"
          >
            <PlusIcon /> <span class="pl-1">Добавить ребенка</span>
          </button>
        </legend>
        <InputField label="Имя" />
        <InputField label="Возраст" number />
        <button type="button" class="block text-blue-500">Удалить</button>

        <InputField label="Имя" />
        <InputField label="Возраст" number />
        <button type="button" class="block text-blue-500">Удалить</button>
      </fieldset>

      <button class="rounded-full bg-blue-500 px-5 py-3 text-white">
        Сохранить
      </button>
    </form>
  </main>
</template>
