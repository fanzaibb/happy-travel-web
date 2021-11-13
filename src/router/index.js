import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/search',
            component: () => import('@/views/Search.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    console.log(to);
    next();
});

export default router;
