<script>
export default {
  data() {
    return {
      name: "Anurag",
      status: "pending",
      tasks: ["Tasks One ", "Task Two", "Task Three"],
      link: "https://google.com",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>Hello World!</h1>
  <h2>{{ name }}</h2>

  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is Pending</p>
  <p v-else>User is InActive</p>

  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <a v-bind:href="link">Click for Google </a>
  <br />
  <button v-on:click="toggleStatus">Change Status</button>
  <br />
  <button @click="toggleStatus">Change Status</button>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
