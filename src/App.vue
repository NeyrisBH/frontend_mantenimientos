<template>
  <RouterView />
</template>

<script>

export default {
  name: 'App',
  components: {

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

.main-container {
  margin-left: 250px;
  transition: margin-left 0.5s;
}

body.sidebar-collapse .main-container {
  margin-left: 0;
  width: 100%;
}
</style>
