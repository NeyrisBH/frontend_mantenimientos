<template>
    <div class="container">
        <table id="example" class="display nowrap" style="width:100%">
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
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011-04-25</td>
                    <td>$320,800</td>
                    <td>
                        <button type="button" class="btn btn-info btn-sm me-2" @click="verRegistro('Tiger Nixon')">
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
    mounted() {
        window.jQuery('#example').DataTable({
            responsive: true,
            scrollY: "600px",
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
    width: 120%;
    overflow-x: auto;
    white-space: nowrap;
}
</style>