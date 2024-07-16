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

<style scoped></style>
