import { createRouter, createWebHistory } from 'vue-router';

import HomeApp from './views/HomeApp.vue';
import ApartmentsIndex from './views/ApartmentsIndex.vue';
import ApartmentShow from './views/ApartmentShow.vue';
import NotFound from './views/NotFound.vue';

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