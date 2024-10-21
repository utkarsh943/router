import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
console.log("page");

createApp(App).use(router).mount('#app');
