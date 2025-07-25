import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import BlogTitle from "@/components/BlogTitle/BlogTitle.vue";
import BlogPostView from "@/views/BlogPostView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/job/add",
      name: "add job",
      component: AddJobView,
    },
    {
      path: "/blog",
      name: "blog post",
      component: BlogPostView,
    },
    {
      path: "/:catch(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
