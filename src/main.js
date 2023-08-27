import { createApp } from 'vue';
import './style.css';
import './assets/css/index.css';
import App from './App.vue';
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import { Video, Button } from '@nutui/nutui';

const app = createApp();
app.use(Video);
app.use(NutUI);
app.mount('#app')
