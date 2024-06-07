<template>
    <HeaderComponent />
    <SidebarComponent />
    <section class="main-container">
        <div class="card-body">
            <ChartContent />
        </div>
        <CardsContent />
    </section>
</template>

<script>
import CardsContent from '@/components/Content/Home/CardsContent.vue';
import ChartContent from '@/components/Content/Home/ChartContent.vue';
import HeaderComponent from '@/components/Header/HeaderComponent.vue';
import SidebarComponent from '@/components/Sidebar/SidebarComponent.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        HeaderComponent,
        SidebarComponent,
        ChartContent,
        CardsContent
    },
    methods: {
    },
    mounted() { }
}
</script>

<style scoped>
.main-container {
    margin-left: 250px;
    transition: margin-left 0.5s;
}

body.sidebar-collapse .main-container {
    margin-left: 0;
    width: 100%;
}
</style>