<template lang="pug">
.chartWrapper
  doughnut(ref="doughnutRef" :data="chartData")
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
    
    const doughnutRef = ref(null);

    const Target = 1000;

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
          backgroundColor: ["green", "rgba(0, 0, 0, 0.2)", "red"],
          borderColor: ["green", "rgba(0, 0, 0, 0.2)", "red"],
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
      console.log(remainingScore.value)
      
      
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
  width: 300px;
  height: 300px;
  padding: 10px;
}
</style>
