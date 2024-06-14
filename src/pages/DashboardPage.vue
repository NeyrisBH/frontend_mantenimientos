<template>
    <div class="card-body">
        <ChartContent />
    </div>
    <CardsContent />
</template>

<script>
import CardsContent from '@/components/Content/Home/CardsContent.vue';
import ChartContent from '@/components/Content/Home/ChartContent.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        ChartContent,
        CardsContent
    },
    methods: {
    },
    mounted() { }
}
</script>

<style scoped></style>