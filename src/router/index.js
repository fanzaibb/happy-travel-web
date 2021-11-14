import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/search',
            component: () => import('@/views/Search.vue')
        },
        {
            path: '/detail',
            component: () => import('@/views/Detail.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    // console.log(to);
    next();
});

export default router;
