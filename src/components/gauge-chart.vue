<template>
  <div class="chartWrapper">
    <doughnut ref="Chart" :data="chartData" />
  </div>
  Current Score = {{ myChartData.value }}
  <button @click="updateChart">Update Chart</button>
</template>

<script>
import { defineComponent, onMounted, reactive, computed } from "vue";
import { Doughnut } from "vue-chartjs";
import { Chart } from "chart.js";



export default defineComponent({
  components: {
    Doughnut,
  },

setup() {
    const Target = 1000;
    const myChartData = reactive({
      value: 700,
    });

    const remainingScore = reactive({
      value: computed(() => Target - myChartData.value),
    });

    function updateChart(){
      myChartData.value += 100;
      console.log(remainingScore.value)
      console.log(myChartData.value);
    };

    let chartData = {
      labels: ["Score", "Gray Area"],
      datasets: [
        {
          label: "Data One",
          aspectRatio: 1.5,
          backgroundColor: ["green", "rgba(0, 0, 0, 0.2)"],
          borderColor: ["green", "rgba(0, 0, 0, 0.2)"],
          borderwidth: 1,
          cutout: "90%",
          data: [myChartData.value, remainingScore.value],
        },
      ],
    };

    return {
      chartData,
      updateChart,
      myChartData,
    };
  },
});
</script>

<style lang="scss" scoped>
.chartWrapper {
  border: 1px solid red;
  width: 500px;
  height: 500px;
}
</style>
