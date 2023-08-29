import { createRouter, createWebHistory } from 'vue-router';

import HomeApp from './pages/HomeApp.vue';
import ApartmentsIndex from './pages/ApartmentsIndex.vue';
import ApartmentShow from './pages/ApartmentShow.vue';
import NotFound from './pages/NotFound.vue';

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
            name: 'apartments-index',
            component: ApartmentsIndex,
        },
        {
            path: '/apartments/:id',
            name: 'apartment-show',
            component: ApartmentShow,
        },
        {
            path: '/:pathMath(.*)*',
            name: 'not-found-404',
            component: NotFound,
        }
    ],
});

export { router }