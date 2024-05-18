import { createApp } from "vue";
//import './style.css'
import App from "./App.vue";
import V3ScrollLock from "v3-scroll-lock";
createApp(App).use(V3ScrollLock, {}).mount("#app");
