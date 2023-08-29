import { createRouter, createWebHistory } from 'vue-router';

import HomeApp from './pages/HomeApp.vue';

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            name: 'home',
            component: HomeApp,
        },
        {
            // altre path 
        },
    ],
});

export default routes;