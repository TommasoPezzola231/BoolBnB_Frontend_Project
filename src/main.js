import { createApp } from 'vue'
import App from './App.vue';
// style
import './styles/main.scss';
// router
import { router } from './router';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// icone
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

library.add(faGithub);


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
