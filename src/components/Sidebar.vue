<script setup>
import { useFeedStore } from "../stores/store";

const feedStore = useFeedStore();
</script>

<template>
  <div class="sidebar">
    <div v-for="(source, index) in feedStore.sources" :key="index">
      <a href="#">{{ source.name }}</a>
    </div>
  </div>
</template>

<style scoped></style>
