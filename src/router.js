
import FallasPage from '@/pages/FallasPage.vue';
import NotFound404 from '@/pages/NotFound404.vue';
import TecnicosPage from '@/pages/TecnicosPage.vue';
import UsuariosPage from '@/pages/UsuariosPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from './pages/DashboardPage.vue';
import EquiposPage from './pages/EquiposPage.vue';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import OTCorrectivaPage from './pages/OTCorrectivaPage.vue';
import OTPreventivaPage from './pages/OTPreventivaPage.vue';
import ProveedoresPage from './pages/ProveedoresPage.vue';
import RepuestosPage from './pages/RepuestosPage.vue';
import SeguimientosCorrectivos from './pages/SeguimientosCorrectivos.vue';
import SeguimientosPreventivos from './pages/SeguimientosPreventivos.vue';
import UbicacionesPage from './pages/UbicacionesPage.vue';

const routers = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        children: [
            {
                path: '/dashboard',
                name: 'DashboardPage',
                component: DashboardPage
            },
            {
                path: '/tecnicos',
                name: "TecnicosPage",
                component: TecnicosPage
            },
            {
                path: '/usuarios',
                name: "UsuariosPage",
                component: UsuariosPage
            },
            {
                path: '/ubicaciones',
                name: "UbicacionesPage",
                component: UbicacionesPage
            },
            {
                path: '/ubicaciones',
                name: "UbicacionesPage",
                component: UbicacionesPage
            },
            {
                path: '/repuestos',
                name: "RepuestosPage",
                component: RepuestosPage
            },
            {
                path: '/repuestos',
                name: "RepuestosPage",
                component: RepuestosPage
            },
            {
                path: '/proveedores',
                name: "ProveedoresPage",
                component: ProveedoresPage
            },
            {
                path: '/orden-de-trabajo-correctiva',
                name: "OTCorrectiva",
                component: OTCorrectivaPage
            },
            {
                path: '/orden-de-trabajo-preventiva',
                name: 'OTPreventiva',
                component: OTPreventivaPage
            },
            {
                path: '/fallas',
                name: 'FallasPage',
                component: FallasPage
            },
            {
                path: '/equipos',
                name: "EquiposPage",
                component: EquiposPage
            },
            {
                path: '/seguimiento-mantenimiento-correctivo',
                name: "SeguimientosCorrectivos",
                component: SeguimientosCorrectivos
            },
            {
                path: '/seguimiento-mantenimiento-preventivo',
                name: "SeguimientosPreventivos",
                component: SeguimientosPreventivos
            }
        ]
    },
    {
        path: '/login',
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound404
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router;