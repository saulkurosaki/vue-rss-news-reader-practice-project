<script setup>
import { useFeedStore } from "../stores/store";

const feedStore = useFeedStore();

const handleClick = (source) => {
  feedStore.loadSource(source);
};
</script>

<template>
  <div class="sidebar">
    <div v-for="(source, index) in feedStore.sources" :key="index">
      <a href="#" @click.prevent="() => handleClick(source)">{{
        source.name
      }}</a>
    </div>
  </div>
</template>

<style scoped></style>
