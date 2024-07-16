import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFeedStore = defineStore("feedStore", () => {
  // States (información de los RSS)
  const sources = reactive([
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

  return { sources, current };
});
