import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';

import {faEnvelope, faComputer} from '@fortawesome/free-solid-svg-icons';
import {faYoutube, faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

/*
 * <FontAwesomeIcon :icon="['fab', 'youtube']" />
 * <FontAwesomeIcon :icon="['fas', 'key']" />
 */
library.add(faEnvelope, faComputer, faYoutube, faGithub, faLinkedin, faStackOverflow);

import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
    .use(router)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
