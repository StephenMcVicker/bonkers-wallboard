<template lang="pug">
.barChartWrapper
  bar(ref="barChart" :data="chartData")
</template>

<script>
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import { Chart } from "chart.js";

export default defineComponent({
  components: {
    Bar,
  },
  setup() {
    const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 20, 12, 39, 10, 40, 39],
        },
      ],
    };

    return {
      chartData,
    };
  },
});
</script>

<style lang="scss" scoped>
.barChartWrapper {
  width: 300px;
  height: 300px;
  
}
</style>