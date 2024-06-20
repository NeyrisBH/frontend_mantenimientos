<template>
    <HeaderComponent />
    <SidebarComponent />
    <section class="main-container">
        <RouterView />
    </section>
</template>

<script>
import HeaderComponent from '@/components/Header/HeaderComponent.vue';
import SidebarComponent from '@/components/Sidebar/SidebarComponent.vue';


export default {
  components: {
    HeaderComponent,
    SidebarComponent
  }
}
</script>

<style scoped>
</style>