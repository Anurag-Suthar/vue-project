<script setup>
import HeroSection from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <HeroSection />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
