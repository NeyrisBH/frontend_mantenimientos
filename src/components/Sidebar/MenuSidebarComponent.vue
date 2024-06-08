<template>
    <!-- Sidebar Menu -->
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
            <li class="nav-item">
                <RouterLink to="/tecnicos" class="nav-link">
                    <i class="nav-icon fas fa-users"></i>
                    <p>Técnicos</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/usuarios" class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>Usuarios</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/ubicaciones" class="nav-link">
                    <i class="nav-icon fas fa-map-marker-alt"></i>
                    <p>Ubicaciones</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/repuestos" class="nav-link">
                    <i class="nav-icon fas fa-cogs"></i>
                    <p>Repuestos</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/proveedores" class="nav-link">
                    <i class="nav-icon fas fa-truck"></i>
                    <p>Proveedores</p>
                </RouterLink>
            </li>
            <li class="nav-item has-treeview">
                <RouterLink to="#" class="nav-link">
                    <i class="nav-icon fas fa-wrench"></i>
                    <p>
                        Orden de Servicios
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </RouterLink>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <RouterLink to="/orden-de-trabajo-correctiva" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Mantenimientos Correctivos</p>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/orden-de-trabajo-preventiva" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Mantenimientos Preventivos</p>
                        </RouterLink>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <RouterLink to="/fallas" class="nav-link">
                    <i class="nav-icon fas fa-exclamation-triangle"></i>
                    <p>Fallas</p>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/equipos" class="nav-link">
                    <i class="nav-icon fas fa-desktop"></i>
                    <p>Equipos</p>
                </RouterLink>
            </li>
            <li class="nav-item has-treeview">
                <RouterLink to="#" class="nav-link">
                    <i class="nav-icon fas fa-tasks"></i>
                    <p>
                        Seguimientos
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </RouterLink>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <RouterLink to="/seguimiento-mantenimiento-correctivo" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Mantenimientos Correctivos</p>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/seguimiento-mantenimiento-preventivo" class="nav-link">
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

</script>

<style scoped>
.nav.nav-pills {
  text-align: left;
}
</style>