import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import { defineCustomElements } from '@arcgis/map-components/dist/loader';
import App from './App.vue';
import quasarUserOptions from './quasar-user-options';
import store from './store/vuexindex';
import router from './router';

defineCustomElements(window);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(store);
app.use(Quasar, quasarUserOptions);
app.mount('#app');
