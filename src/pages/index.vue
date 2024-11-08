<script setup lang="ts">
import InputField from "~/components/InputField.vue";
import PlusIcon from "~/components/PlusIcon.vue";
import { useStore, type Person } from "~/store.ts";

const store = useStore();

function submit(event: Event): void {
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const account = {
    name: data.get("account-name") as string,
    age: parseInt(data.get("account-age") as string),
  } satisfies Person;

  store.update(account, []);

  console.log(store.account);
}
</script>

<template>
  <main class="flex grow justify-center py-8">
    <form class="space-y-10" @submit.prevent="submit">
      <fieldset class="space-y-3">
        <legend class="w-full px-0.5 font-semibold">Персональные данные</legend>
        <InputField label="Имя" required name="account-name" />
        <InputField label="Возраст" number required name="account-age" />
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
            class="block rounded-full border border-blue-500 px-5 py-3 font-normal text-blue-500 hover:bg-blue-100"
          >
            <PlusIcon /> <span class="pl-1">Добавить ребенка</span>
          </button>
        </legend>
        <InputField label="Имя" required />
        <InputField label="Возраст" number required />
        <button type="button" class="block text-blue-500 hover:underline">
          Удалить
        </button>

        <InputField label="Имя" required />
        <InputField label="Возраст" number required />
        <button type="button" class="block text-blue-500 hover:underline">
          Удалить
        </button>
      </fieldset>

      <button
        class="rounded-full bg-blue-500 px-5 py-3 text-white hover:bg-blue-400"
      >
        Сохранить
      </button>
    </form>
  </main>
</template>
