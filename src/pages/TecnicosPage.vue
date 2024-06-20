<template>
    <h1>Tecnicos</h1>
    <TablaTecnicos class="container-xxl" />
    <HoverTecnico class="mt-5"/>
</template>

<script>
import HoverTecnico from '@/components/Content/Tecnicos/HoverTecnico.vue';
import TablaTecnicos from '@/components/Content/Tecnicos/TablaTecnicos.vue';

export default {
    components: {
        TablaTecnicos,
        HoverTecnico
    }
}
</script>

<style scoped>
.container-xxl {
    margin: 0 5% 0 5%
}
</style>