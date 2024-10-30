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
.main-container {
  padding: 20px;
  max-height: 870px;
  overflow-x: auto;
}
</style>