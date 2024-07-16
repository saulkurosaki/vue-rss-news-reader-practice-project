import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFeedStore = defineStore("feedStore", () => {
  // Estados (información de los RSS)
  const source = reactive([
    {
      id: crypto.randomUUID(),
      name: "Mozilla Hacks",
      url: "https://hacks.mozilla.org/feed",
    },
  ]);

  const current = reactive({
    source: null,
    items: null,
  });

  // Actions
  async function loadSource(source) {}

  async function registerNewSource(url) {}

  return { source, current };
});
