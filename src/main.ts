import { createSSRApp } from "vue";
import router from "./router/index";

import "./style.scss";
import App from "./App.vue";

createSSRApp(App).use(router).mount("#app");
