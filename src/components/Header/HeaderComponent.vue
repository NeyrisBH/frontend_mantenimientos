<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light layout-navbar-fixed">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Help
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
          <a class="dropdown-item" href="#">FAQ</a>
          <a class="dropdown-item" href="#">Support</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Contact</a>
        </div>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <MensajesComponent/>
      <NotificacionesComponent/>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
            class="fas fa-th-large"></i></a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

</template>

<script>
import MensajesComponent from './MensajesComponent.vue';
import NotificacionesComponent from './NotificacionesComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MensajesComponent,
    NotificacionesComponent
  }
}
</script>

<style scoped></style>