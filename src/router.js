import HomePage from '@/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './pages/LoginPage.vue';

const routers = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/',
        name: "LoginPage",
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router;