// EJEMPLO DE PINIA STATE MANAGER

import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 1er parametro: Id del Store
// 2do parametro: Arrow function con el objeto de configuración
export const useCounterStore = defineStore("counter", () => {
  // Estado de variable reactiva (ref o reactive)
  const count = ref(0);

  // Getters: funciones que van a computarizarse con cada actualización de estado
  const doubleCount = computed(() => count.value * 2);

  // Actions: funciones que modifican directamente el estado
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
