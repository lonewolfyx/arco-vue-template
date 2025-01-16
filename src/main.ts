import {createApp} from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import {createPinia} from 'pinia';

import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import './assets/reset.css';
import './assets/tailwind.css';

import './assets/main.css';

import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ArcoVue);
app.use(ArcoVueIcon)

app.mount('#app');
