import { createRouter, createWebHistory } from 'vue-router';

import HomeApp from './pages/HomeApp.vue';
import ApartmentsIndex from './pages/ApartmentsIndex.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            name: 'home',
            component: HomeApp,
        },
        {
            path: '/apartments',
            name: 'apartments',
            component: ApartmentsIndex,
        },
    ],
});

export { router }