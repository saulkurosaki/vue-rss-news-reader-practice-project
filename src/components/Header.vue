<script setup>
import { ref } from "vue";
import { useFeedStore } from "@/stores/store";

const url = ref("");
const feedStore = useFeedStore();

const handleSubmit = () => {
  if (!!url.value) {
    feedStore.registerNewSource(url.value);
  }
};
</script>

<template>
  <div class="header">
    <form action="" @submit.prevent="handleSubmit">
      <input type="url" required v-model="url" />
      <button type="submit">Add Source</button>
    </form>
  </div>
</template>

<style scoped>
.header {
  background: black;
  grid-area: header;
  justify-self: stretch;
  display: flex;
  justify-content: center;
  padding: 10px;
}

form {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
}

.input {
  border: none;
  width: 400px;
}
</style>
