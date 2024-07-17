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
  async function loadSource(source) {
    const response = await fetch(source.url);
    let text = await response.text();
    text = text.replace(/content:encoded/g, "content");

    const domParser = new DOMParser();
    const doc = domParser.parseFromString(text, "text/xml");

    console.log(doc);

    let posts = [];

    doc.querySelectorAll("item, entry").forEach((item) => {
      const post = {
        title: item.querySelector("title").textContent ?? "Sin Titulo",
        content: item.querySelector("content").textContent ?? "",
      };

      posts.push(post);
    });

    current.items = [...posts];
    current.source = source;
  }

  async function registerNewSource(url) {
    try {
      const response = await fetch(url);
      let text = await response.text();
      const domParser = new DOMParser();
      let doc = domParser.parseFromString(text, "text/xml");

      const title = doc.querySelector("channel title, feed title");

      const source = {
        id: crypto.randomUUID(),
        name: title.textContent,
        url,
      };

      sources.push(source);
    } catch (error) {
      console.log(error);
    }
  }

  return { sources, current, loadSource, registerNewSource };
});
