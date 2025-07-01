<!-- below example of composition API -->
<script setup>
import { onMounted, ref } from "vue";

const name = ref("Anurag");
const status = ref("active");
const tasks = ref(["Task One", "Task Two", "Task Three"]);

const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() != "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => {
      return task.title;
    });
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <h1>Hello World!</h1>
  <h2>{{ name }}</h2>

  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is Pending</p>
  <p v-else>User is InActive</p>
  <br />

  <form @submit.prevent="addTask">
    <label for="new Task">Add Task</label><br />
    <input type="text" id="newTask" name="newTask" v-model="newTask" /><br />
    <button type="submit">Submit</button>
  </form>

  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button
        style="margin-left: 4px; cursor: pointer"
        @click="deleteTask(index)"
      >
        X
      </button>
    </li>
  </ul>

  <a v-bind:href="link">Click for Google </a>
  <br />
  <button v-on:click="toggleStatus">Change Status</button><br />
  <button @click="toggleStatus">Change Status</button>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
