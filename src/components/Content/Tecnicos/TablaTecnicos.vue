<template>
    <div class="container-xxl p-5 my-5 border">
        <table id="tecnicos" class="display nowrap table-hover" style="width:100%">
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
                        <button type="button" class="btn btn-info btn-sm mr-1" @click="verRegistro(tecnico)">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm mr-1" @click="editarRegistro(tecnico)">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm mr-1" @click="eliminarRegistro(tecnico)">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" @click="showModal = false">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container bootstrap snippets bootdey">
                            <div class="panel-body inf-content">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img alt="" style="width:600px;" title=""
                                            class="img-circle img-thumbnail isTooltip"
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            data-original-title="Usuario" />
                                        <ul title="Ratings" class="list-inline ratings text-center">
                                            <li>
                                                <a href="#"><span class="glyphicon glyphicon-star"></span></a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="glyphicon glyphicon-star"></span></a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="glyphicon glyphicon-star"></span></a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="glyphicon glyphicon-star"></span></a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="glyphicon glyphicon-star"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <strong>Information</strong><br />
                                        <div class="table-responsive">
                                            <table class="table table-user-information">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-asterisk text-primary"></span>
                                                                Identificacion
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">123456789</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-user text-primary"></span>
                                                                Name
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">Bootdey</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-cloud text-primary"></span>
                                                                Lastname
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">Bootstrap</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-bookmark text-primary"></span>
                                                                Username
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">bootnipets</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-eye-open text-primary"></span>
                                                                Role
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">Admin</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-envelope text-primary"></span>
                                                                Email
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">noreply@email.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-calendar text-primary"></span>
                                                                created
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">20 jul 20014</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                <span
                                                                    class="glyphicon glyphicon-calendar text-primary"></span>
                                                                Modified
                                                            </strong>
                                                        </td>
                                                        <td class="text-primary">20 jul 20014 20:00:00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showModal = false">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Constantes from '@/data';

export default {
    data() {
        return {
            tecnicos: [],
            identificacion: null,
            rol: "",
            nombres: "",
            apellidos: "",
            telefono: null,
            email: "",
            horas: null,
            contraseña: "",
            token: this.$store.state.token,
            base_url: Constantes.BASE_URL,
            showModal: false,
        };
    },
    methods: {
        async consultaTecnicos() {
            const authorization = "Bearer " + this.token;
            const opciones = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    Authorization: authorization,
                },
            };
            try {
                const response = await fetch(this.base_url + "v1/tecnicos", opciones);
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error("Error response text:", errorText);
                    throw new Error(
                        `HTTP error! Status: ${response.status} - ${response.statusText}`
                    );
                }
                const data = await response.json();
                this.tecnicos = data;
                console.log(this.tecnicos);

                // Inicializar DataTable después de que los datos han sido cargados
                this.$nextTick(() => {
                    window.jQuery("#tecnicos").DataTable({
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
                                previous: "Anterior",
                            },
                            aria: {
                                sortAscending: ": activar para ordenar la columna ascendente",
                                sortDescending: ": activar para ordenar la columna descendente",
                            },
                        },
                    });
                });
            } catch (error) {
                console.error("Error fetching técnicos:", error);
            }
        },
        verRegistro(tecnico) {
            console.log(tecnico);
            this.showModal = true;
        },
        editarRegistro(tecnico) {
            console.log(tecnico);
        },
        eliminarRegistro(tecnico) {
            console.log(tecnico);
        },
    },
    async mounted() {
        await this.consultaTecnicos();
    },
};
</script>

<style scoped>
.container-xxl {
    margin-top: 57px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-dialog-centered {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.modal {
    position: relative;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    width: 80%;
    /* Ancho del modal */
    max-width: 600px;
    /* Ancho máximo del modal */
}
</style>