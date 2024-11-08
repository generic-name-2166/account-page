import { shallowRef } from "vue";
import { defineStore } from "pinia";

export interface Person {
  name: string;
  age: number;
}

export const useStore = defineStore("account", () => {
  const account = shallowRef<Person | null>(null);
  const children = shallowRef<Person[]>([]);

  function update(acc: Person, chi: Person[]): void {
    account.value = acc;
    children.value = chi;
  }

  return {
    account,
    children,
    update,
  };
});
