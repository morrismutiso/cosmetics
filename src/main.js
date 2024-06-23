import main from "./assets/css/main.css"
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
const app = createApp(App);
app.use(main)
app.use(router).mount("#app");