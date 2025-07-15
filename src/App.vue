<script setup>
import Navbar from "@/components/common/Navbar.vue";
import ConfirmDialog from "primevue/confirmdialog";

import { RouterView } from "vue-router";
</script>

<template>
  <ConfirmDialog />
  <Navbar />
  <RouterView />
</template>
