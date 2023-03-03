<template lang="pug">
.barChartWrapper
	Line(ref="lineChart" :data="chartData" :options="options")
</template>

<script>
import { defineComponent } from "vue";
import { Line } from "vue-chartjs";
import { Chart } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Line,
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
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "pink",
          data: [40, 20, 12, 39, 10, 40, 39, 40, 20, 12, 39, 10],
        },
      ],
    };

    return {
      chartData,
			Line,
      options,
    };
  },
});
</script>

<style lang="scss" scoped>
.barChartWrapper {
  position: relative;
  min-width: 100%;
  height: 160px;

}
</style>
