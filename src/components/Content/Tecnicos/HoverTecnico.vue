<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="form_hover border">
                    <p>
                        <i class="fa fa-user" style="font-size: 147px;"></i>
                    </p>
                    <div class="header">
                        <div class="header-text text-center">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h3>User Details</h3>
                                </div>
                                <div class="card-block container p-3 text-center">
                                    <div class="form-group">
                                        Rol:<b>02/09/2013</b>
                                    </div>
                                    <div class="form-group">
                                        Correo:<b>104</b>
                                    </div>
                                    <div class="form-group">
                                        <button type="button" class="btn btn-outline-secondary btn-sm">Cambio de contraseña</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style>
.form_hover {
    padding: 0px;
    position: relative;
    overflow: hidden;
    height: 240px;
    border-bottom: 2;
    border-radius: 5%;
    border: 2rem;
}

.form_hover:hover .header {
    opacity: 1;
    transform: translateY(-172px);
    -webkit-transform: translateY(-172px);
    -moz-transform: translateY(-172px);
    -ms-transform: translateY(-172px);
    -o-transform: translateY(-172px);
}

.form_hover .header {
    position: absolute;
    top: 170px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    width: 100%;
}

.card-success:not(.card-outline)>.card-header {
    background-color: var(--info-color);
}

.card-success {
    height: 247px;
}
</style>