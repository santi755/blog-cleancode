import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/blog/infrastructure/router/vue-router/routes.ts';
import vuetify from '@/shared/infrastructure/plugins/vuetify.ts';

createApp(App).use(router).use(vuetify).mount('#app');
