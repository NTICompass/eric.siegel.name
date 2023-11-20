import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
// import {library} from '@fortawesome/fontawesome-svg-core';

import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
    .use(router)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
