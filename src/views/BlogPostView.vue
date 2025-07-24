<script setup>
import BlogTitle from "@/components/BlogTitle/BlogTitle.vue";
import { ref } from "vue";

const posts = ref([
  {
    id: 1,
    title: "My journey in vue js ",
  },
  {
    id: 2,
    title: "This is Bikaner Fort",
  },
]);

const postFontSize = ref(1);
</script>

<template>
  <section>
    <div class="container m-auto max-w-2xl py-24">
      <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogTitle
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          @enlarge-text="postFontSize += 0.1"
        />
      </div>
    </div>
  </section>
</template>
