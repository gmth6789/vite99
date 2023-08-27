import { createApp } from 'vue'
import './style.css';
import './assets/css/index.css';
import App from './App.vue'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

createApp(App).use(NutUI).mount('#app')
