import { createApp } from 'vue'
import App from './App.vue';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// style
import './styles/main.scss';
// router
import { router } from './router';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// icone
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub);
library.add(faChevronDown);




createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
