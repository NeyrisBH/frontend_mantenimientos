<template>
    <!-- Sidebar Menu -->
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
            <li class="nav-item">
                <RouterLink to="/home/tecnicos" class="nav-link">
                    <i class="nav-icon fas fa-users"></i>
                    <p>Técnicos</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/home/usuarios" class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>Usuarios</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/home/ubicaciones" class="nav-link">
                    <i class="nav-icon fas fa-map-marker-alt"></i>
                    <p>Ubicaciones</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/home/repuestos" class="nav-link">
                    <i class="nav-icon fas fa-cogs"></i>
                    <p>Repuestos</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/home/proveedores" class="nav-link">
                    <i class="nav-icon fas fa-truck"></i>
                    <p>Proveedores</p>
                </RouterLink>
            </li>
            <li class="nav-item" :class="{ 'menu-open': isOrdenServiciosOpen }">
                <a href="#" class="nav-link" @click.prevent="toggleOrdenServicios">
                    <i class="nav-icon fas fa-wrench"></i>
                    <p>
                        Orden de Servicios
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview" v-show="isOrdenServiciosOpen">
                    <li class="nav-item">
                        <RouterLink to="/home/orden-de-trabajo-correctiva" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Mantenimientos Correctivos</p>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/home/orden-de-trabajo-preventiva" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Mantenimientos Preventivos</p>
                        </RouterLink>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <RouterLink to="/home/fallas" class="nav-link">
                    <i class="nav-icon fas fa-exclamation-triangle"></i>
                    <p>Fallas</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/home/equipos" class="nav-link">
                    <i class="nav-icon fas fa-desktop"></i>
                    <p>Equipos</p>
                </RouterLink>
            </li>
            <li class="nav-item" :class="{ 'menu-open': isSeguimientosOpen }">
                <a href="#" class="nav-link" @click.prevent="toggleSeguimientos">
                    <i class="nav-icon fas fa-tasks"></i>
                    <p>
                        Seguimientos
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview" v-show="isSeguimientosOpen">
                    <li class="nav-item">
                        <RouterLink to="/home/seguimiento-mantenimiento-correctivo" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Mantenimientos Correctivos</p>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/home/seguimiento-mantenimiento-preventivo" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Mantenimientos Preventivos</p>
                        </RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
</template>

<script>
export default {
    data() {
        return {
            isOrdenServiciosOpen: false,
            isSeguimientosOpen: false
        };
    },
    methods: {
        toggleOrdenServicios() {
            this.isOrdenServiciosOpen = !this.isOrdenServiciosOpen;
        },
        toggleSeguimientos() {
            this.isSeguimientosOpen = !this.isSeguimientosOpen;
        }
    }
};
</script>

<style scoped>
.nav.nav-pills {
    text-align: left;
}

/* .nav-item.menu-open>.nav-treeview {
    display: block;
}

.nav-treeview {
    display: none;
} */
</style>
