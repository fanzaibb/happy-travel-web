import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
    //no-sparse-arrays
    routes: [
        { path: '/', component: () => import('@/views/Home.vue') },
        { path: '/search', component: () => import('@/views/Search.vue') },
        { path: '/search-city', component: () => import('@/views/SearchCity.vue') },
        { path: '/detail', component: () => import('@/views/Detail.vue') },
        { path: '/spot', component: () => import('@/views/Spot.vue') },
        { path: '/restaurant', component: () => import('@/views/Restaurant.vue') },
        { path: '/activity', component: () => import('@/views/Activity.vue') },
        { path: '/hotel', component: () => import('@/views/Hotel.vue') }
    ]
});

router.beforeEach(async (to, from, next) => {
    if (to.path !== '/' && !from.href) {
        next({ path: '/' });
    } else next();
});

export default router;
