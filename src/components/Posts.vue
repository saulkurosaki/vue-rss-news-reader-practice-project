<script setup>
import { useFeedStore } from "@/stores/store";

const feedStore = useFeedStore();
</script>

<template>
  <div class="main">
    <h1 v-if="feedStore.current.source">{{ feedStore.current.source.name }}</h1>

    <details v-for="post in feedStore.current.items" :key="post.title">
      <summary>{{ post.title }}</summary>
      <div v-html="post.content"></div>
    </details>
  </div>
</template>

<style scoped>
.main {
  background-color: #213442;
  color: white;
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 20px 80px 20px 40px;
}

summary {
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
}

summary:hover {
  background-color: rgb(174, 221, 255);
  color: black;
}
</style>

<style>
img,
figure {
  margin: 0 auto;
  max-width: min(100%, 500px);
  display: block;
}
a {
  color: yellowgreen;
}
</style>
