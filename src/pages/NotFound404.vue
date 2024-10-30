<template>
    <section class="d-flex align-items-center min-vh-100 bg-light text-dark p-5">
        <div class="container d-flex flex-column align-items-center justify-content-center text-center">
            <div class="max-w-md">
                <h2 class="mb-4 display-1 text-muted">
                    <span class="sr-only">Error</span>404
                </h2>
                <p class="h4 font-weight-bold">Lo sentimos, no pudimos encontrar esta página.</p>
                <p class="mt-3 mb-4 text-muted">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.
                </p>
                <RouterLink to="/home" class="btn btn-primary">Volver a la página de inicio</RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "NotFoundPage"
};
</script>

<style scoped>
.min-vh-100 {
    min-height: 100vh;
}

.max-w-md {
    max-width: 28rem;
}

.display-1 {
    font-size: 6rem;
}
</style>