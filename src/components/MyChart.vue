<template lang="pug">
.barChartWrapper
  bar(ref="barChart" :data="chartData" :options="options")
</template>

<script>
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import { Chart } from "chart.js";

export default defineComponent({
  components: {
    Bar,
  },
  setup(props) {

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          position: "bottom",
        },
      },
    };


    const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [20, 20, 12, 18, 10, 20, 19, 10, 20, 12, 19, 10, 20, 10],
        },
      ],
    };

    return {
      chartData,
      options,
    };
  },
});
</script>

<style lang="scss" scoped>
.barChartWrapper {
  position: relative;
  min-width: 100%;
  height: 100px;

  @media screen and (min-width: 1800px) {
    height: 160px;
  }
}
</style>