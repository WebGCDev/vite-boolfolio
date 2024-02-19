import { createApp } from 'vue';
// import default scss
import './scss/style.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import App from './App.vue';

import router from './route';

createApp(App).mount('#app');

createApp(App).use(router).mount('#app');
