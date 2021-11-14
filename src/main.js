import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store.js';
import '@/style/index.sass';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
