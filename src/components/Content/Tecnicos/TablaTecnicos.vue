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
                <tr v-for="(tecnico, index) in tecnicos" :key="index">
                    <td>{{ tecnico.identificacion }}</td>
                    <td>{{ tecnico.rol }}</td>
                    <td>{{ tecnico.nombres }}</td>
                    <td>{{ tecnico.apellidos }}</td>
                    <td>{{ tecnico.telefono }}</td>
                    <td>{{ tecnico.email }}</td>
                    <td>
                        <button class="btn btn-info btn-sm me-2" @click="verRegistro(tecnico)">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm me-2" @click="editarRegistro(tecnico)">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm me-2" @click="eliminarRegistro(tecnico)">
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
            const authorization = "Bearer " + this.token;
            const opciones = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "Authorization": authorization,
                }
            };
            try {
                const response = await fetch(this.base_url + 'v1/tecnicos', opciones);
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error("Error response text:", errorText);
                    throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                this.tecnicos = data;
            } catch (error) {
                console.error("Error fetching técnicos:", error);
            }
        },
        verRegistro(tecnico) {
            console.log("Ver registro:", tecnico);
        },
        editarRegistro(tecnico) {
            console.log("Editar registro:", tecnico);
        },
        eliminarRegistro(tecnico) {
            console.log("Eliminar registro:", tecnico);
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
