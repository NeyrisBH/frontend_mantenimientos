import '@/assets/theme.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-responsive';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importa jQuery y asigna a window
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery;

const app = createApp(App);

app.use(router);

app.mount('#app');
