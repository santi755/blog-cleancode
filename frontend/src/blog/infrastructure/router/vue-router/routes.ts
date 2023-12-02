import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import BlogPage from '@/blog/infrastructure/ui/vue3/pages/blog/Blog.page.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/blog',
        component: BlogPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
