<template>
    <div class="container">
        <table id="tecnicos" class="display nowrap" style="width:100%">
            <thead>
                <tr>
                    <th>Identificacion</th>
                    <th>Rol</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tecnico in tecnicos">
                    <td>{{ tecnico.identificacion }}</td>
                    <td>{{ tecnico.rol }}</td>
                    <td>{{ tecnico.nombres }}</td>
                    <td>{{ tecnico.apellidos }}</td>
                    <td>{{ tecnico.telefono }}</td>
                    <td>{{ tecnico.email }}</td>
                    <td>
                        <button class="btn btn-info btn-sm me-2" @click="verRegistro('Tiger Nixon')">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm me-2" @click="editarRegistro('Tiger Nixon')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm me-2" @click="eliminarRegistro('Tiger Nixon')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Identificacion</th>
                    <th>Rol</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tecnicos: [],
            identificacion: null,
            rol: '',
            nombres: '',
            apellidos: '',
            telefono: null,
            email: '',
            horas: null,
            contraseña: '',
            token: localStorage.getItem('token'),
            base_url: 'http://localhost:8080/api/',
        }
    },
    methods: {
        async consultaTecnicos() {
            const authorization = "Bearer" + this.token;
            const opciones = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "Authorization": authorization,
                }
            };
            fetch(base_url + 'v1/tecnicos', opciones)
                .then(async (response) => {
                    if (!response.ok) {
                        const error = new Error(response.statusText);
                        error.json = response.json();
                        console.log(error.menssage);
                        throw error;
                    } else {
                        this.tecnicos = await response.json();
                    }
                })
        }
    },
    beforeMount() {
        this.consultaTecnicos();
    },
    mounted() {
        window.jQuery('#tecnicos').DataTable({
            responsive: true,
            scrollY: "300px",
            scrollCollapse: true,
            paging: true,
            language: {
                lengthMenu: "Mostrar _MENU_ entradas por página",
                zeroRecords: "No se encontraron registros",
                info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
                infoEmpty: "Mostrando 0 a 0 de 0 entradas",
                infoFiltered: "(filtrado de _MAX_ entradas totales)",
                search: "Buscar:",
                paginate: {
                    first: "Primero",
                    last: "Último",
                    next: "Siguiente",
                    previous: "Anterior"
                },
                aria: {
                    sortAscending: ": activar para ordenar la columna ascendente",
                    sortDescending: ": activar para ordenar la columna descendente"
                }
            }
        });

    },
    components: {

    },
}
</script>

<style scoped>
.container {
    width: 100%;
    overflow-x: auto;
}
</style>