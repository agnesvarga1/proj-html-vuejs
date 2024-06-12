import { createApp } from "vue";
import "./styles/fonts.scss";
import App from "./App.vue";
import V3ScrollLock from "v3-scroll-lock";
import vClickOutside from "click-outside-vue3";
createApp(App).use(V3ScrollLock, {}).use(vClickOutside).mount("#app");
