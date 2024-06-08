<template>
  <HeaderComponent />
  <SidebarComponent />
  <RouterView />
</template>

<script>
import HeaderComponent from '@/components/Header/HeaderComponent.vue';
import SidebarComponent from '@/components/Sidebar/SidebarComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
