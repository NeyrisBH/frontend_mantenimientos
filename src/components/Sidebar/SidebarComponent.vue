<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
            <img src="../../assets/logocccPositivo.png" alt="Logo CCC" class="brand-image" style="opacity: 1">
            <span class="brand-text font-weight-light">AdminCCC</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <form class="form-inline mt-3">
                <div class="input-group">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Buscar"
                        aria-label="Buscar">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            <MenuSidebarComponent />
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
import MenuSidebarComponent from './MenuSidebarComponent.vue';

export default {
    name: 'SidebarComponent',
    components: {
        MenuSidebarComponent
    }
}
</script>

<style scoped>

</style>