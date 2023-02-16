<template lang="pug">
.chartWrapper
  doughnut(ref="doughnutRef" :data="chartData" :chart-options="chartOptions")
  span.scorePercent {{ scoreAsPercentage }}%
  p Current Score = {{ score }}
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, computed, watch } from "vue";
import { Doughnut } from "vue-chartjs";
import { Chart } from "chart.js";

export default defineComponent({
  components: {
    Doughnut,
  },
  props: {
    newData: {
      type: Number,
      default: 100,
    },
    score: {
      type: Number,
      default: 100,
    },
  },


setup(props) {

    const chartOptions = {
      options: {
        plugins: {
          legend: {
            display: false,
            position: 'bottom'
          }
        }
        }
      }
    
    const doughnutRef = ref(null);

    const Target = 1000;

    let variableColour = "lightgreen";

    let scoreAsPercentage = 70;

    const myChartData = reactive({
      value: 600,
    });

    const remainingScore = reactive({
      value: computed(() => Target - props.score),
    });

    let chartData = reactive({
      labels: ["Score", "Remaining"],
      datasets: [
        {
          label: "Data One",
          aspectRatio: 1.5,
          backgroundColor: [variableColour, "rgba(0, 0, 0, 0.2)"],
          borderColor: [variableColour, "rgba(0, 0, 0, 0.2)"],
          borderwidth: 1,
          cutout: "90%",
          data: [props.score, remainingScore.value],
        },
      ],
    });

    function updateChart() {
      myChartData.value += 100;
      
      if(doughnutRef.value) {
        doughnutRef.value.update();
      }
      console.log(myChartData.value);
      console.log(remainingScore.value);
      console.log(scoreAsPercentage);
      
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
  width: 250px;
  height: 250px;
  padding: 10px;
  border:1px solid grey;
}

.scorePercent {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  font-size: 1rem;
}
</style>
