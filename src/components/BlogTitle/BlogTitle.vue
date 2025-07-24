<script setup>
defineProps(["title"]);
const emit = defineEmits(["enlarge-text"]);
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-1 py-4">
    <h2>{{ title }}</h2>
    <button
      class="mt-4 border bg-red-400 px-4 py-2 rounded-lg"
      @click="$emit('enlarge-text')"
    >
      Enlarge text
    </button>
  </div>
</template>
