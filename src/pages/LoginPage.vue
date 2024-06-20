<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 mt-5">
                <div class="login-box shadow">
                    <div class="login-logo">
                        <h2>AdminCCC</h2>
                    </div>
                    <div class="card">
                        <div class="card-body login-card-body">
                            <p class="login-box-msg">Accede para comenzar</p>

                            <!-- Formulario -->
                            <form @submit.prevent="solicitarToken" class="form">
                                <div class="input-group mb-3">
                                    <input type="email" v-model="email" id="email" class="form-control"
                                        placeholder="usuario o correo electrónico">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" v-model="contraseña" id="contraseña" class="form-control"
                                        placeholder="contraseña">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Mensaje de error -->
                                <div v-if="errores.length" class="alert alert-danger">
                                    <ul>
                                        <li v-for="error in errores" :key="error">{{ error }}</li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <div class="icheck-primary">
                                            <input type="checkbox" name="remember" id="remember">
                                            <label for="remember" class="mx-1"> Recordarme</label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <button :disabled="loading" type="submit"
                                            class="btn btn-primary btn-block form-submit">
                                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
                                                aria-hidden="true"></span>
                                            {{ loading ? 'Cargando...' : 'Acceder' }}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <!-- Links adicionales -->
                            <p class="mb-1">
                                <router-link to="/forgot-password">Olvidé mi contraseña</router-link>
                            </p>
                            <p class="mb-0">
                                <router-link to="/register" class="text-center">Registrar un nuevo usuario</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            contraseña: '',
            base_url: 'http://localhost:8080/api/',
            errores: [],
            loading: false
        }
    },
    methods: {
        ...mapActions(['login']),
        async solicitarToken() {
            this.errores = [];
            this.loading = true;

            // Validar campos
            if (!this.email.trim()) {
                this.errores.push('El email es requerido.');
            }
            if (!this.contraseña.trim()) {
                this.errores.push('La contraseña es requerida.');
            }

            if (this.errores.length > 0) {
                this.loading = false;
                return;
            }

            const opciones = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify({
                    email: this.email,
                    contraseña: this.contraseña
                })
            };

            try {
                const response = await fetch(this.base_url + 'token', opciones);
                if (!response.ok) {
                    console.log(response.statusText)
                    throw new Error('Error en la solicitud del token: ' + response.statusText);
                }
                const data = await response.json();
                await this.login(data.token);
                this.$router.push('/home/dashboard');
                console.log('Token recibido:', data.token);

                setTimeout(() => {
                    this.$store.dispatch('logout');
                    this.$router.push('/login');
                }, 2700000);


            } catch (error) {
                console.error('Hubo un problema con la solicitud del token:', error);
                this.errores.push('Hubo un problema con la solicitud del token.');
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>