import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./router";

import PrimeVue from "primevue/config";

import ConfirmDialog from "primevue/confirmdialog";
import ConfirmationService from "primevue/confirmationservice"; // Fixed import
import ToastService from "primevue/toastservice"; // Add this if using PrimeVue toast

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Register components and plugins
app.component("ConfirmDialog", ConfirmDialog); // Register the component

app.use(router);
app.use(PrimeVue);
app.use(ConfirmationService); // Correct service usage
app.use(ToastService); // Add this if using PrimeVue toast
app.use(Toast); // Your existing vue-toastification

app.mount("#app");
