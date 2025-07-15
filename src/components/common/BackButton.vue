<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
defineProps({
  title: String,
  backRoute: String,
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        :to="backRoute"
        class="text-green-500 hover:text-green-600 flex items-center gap-1"
      >
        <i class="pi pi-arrow-circle-left"></i>{{ title }}
      </RouterLink>
    </div>
  </section>
</template>
