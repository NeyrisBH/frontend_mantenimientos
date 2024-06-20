import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from './pages/DashboardPage.vue';
import EquiposPage from './pages/EquiposPage.vue';
import FallasPage from './pages/FallasPage.vue';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import NotFound404 from './pages/NotFound404.vue';
import OTCorrectivaPage from './pages/OTCorrectivaPage.vue';
import OTPreventivaPage from './pages/OTPreventivaPage.vue';
import ProveedoresPage from './pages/ProveedoresPage.vue';
import RepuestosPage from './pages/RepuestosPage.vue';
import SeguimientosCorrectivos from './pages/SeguimientosCorrectivos.vue';
import SeguimientosPreventivos from './pages/SeguimientosPreventivos.vue';
import TecnicosPage from './pages/TecnicosPage.vue';
import UbicacionesPage from './pages/UbicacionesPage.vue';
import UsuariosPage from './pages/UsuariosPage.vue';
import store from './store';

const routes = [
    {
        path: '/login',
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: '/page-404',
        name: "NotFound404",
        component: NotFound404
    },
    {
        path: '/home',
        name: 'HomePage',
        redirect: '/home/dashboard',
        component: HomePage,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name: 'DashboardPage',
                component: DashboardPage
            },
            {
                path: 'tecnicos',
                name: "TecnicosPage",
                component: TecnicosPage
            },
            {
                path: 'usuarios',
                name: "UsuariosPage",
                component: UsuariosPage
            },
            {
                path: 'ubicaciones',
                name: "UbicacionesPage",
                component: UbicacionesPage
            },
            {
                path: 'repuestos',
                name: "RepuestosPage",
                component: RepuestosPage
            },
            {
                path: 'proveedores',
                name: "ProveedoresPage",
                component: ProveedoresPage
            },
            {
                path: 'orden-de-trabajo-correctiva',
                name: "OTCorrectiva",
                component: OTCorrectivaPage
            },
            {
                path: 'orden-de-trabajo-preventiva',
                name: 'OTPreventiva',
                component: OTPreventivaPage
            },
            {
                path: 'fallas',
                name: 'FallasPage',
                component: FallasPage
            },
            {
                path: 'equipos',
                name: "EquiposPage",
                component: EquiposPage
            },
            {
                path: 'seguimiento-mantenimiento-correctivo',
                name: "SeguimientosCorrectivos",
                component: SeguimientosCorrectivos
            },
            {
                path: 'seguimiento-mantenimiento-preventivo',
                name: "SeguimientosPreventivos",
                component: SeguimientosPreventivos
            }
        ]
    },
    {
        path: '/',
        redirect: '/home/dashboard'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/page-404'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _from, next) => {
    if (store.getters.isTokenExpired) {
        store.dispatch('logout');
        if (to.path !== '/login') {
            next('/login');
        } else {
            next();
        }
    } else {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!store.getters.isAuthenticated) {
                next('/login');
            } else {
                next();
            }
        } else {
            if (to.path === '/login' && store.getters.isAuthenticated) {
                next('/home/dashboard');
            } else {
                next();
            }
        }
    }
});

export default router;