<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto';
import { onMounted, ref } from 'vue';

export default {
    name: 'ChartComponent',
    setup() {
        const canvas = ref(null);

        onMounted(() => {
            new Chart(canvas.value, {
                type: 'bar', // Cambia esto al tipo de gráfico que desees
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                            hoverBorderColor: 'rgba(75, 192, 192, 1)',
                            data: [65, 59, 80, 81, 56, 55, 40],
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
            });
        });

        return { canvas };
    },
};
</script>

<style scoped>
canvas {
    width: 100% !important;
    height: 400px !important;
}
</style>