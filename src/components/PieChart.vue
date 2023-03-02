<template lang="pug">
.chartWrapper
  p Quarterly Breakdown - Product
  Pie(ref="pieRef" :data="chartData" :options="options")
</template>

<script>
import UiCard from "@/components/ui/UiCard.vue";

import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
  computed,
  watch,
} from "vue";
import { Pie } from 'vue-chartjs'
import { Chart } from "chart.js";

export default defineComponent({
  components: {
    Pie,
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
    scoreAsPercent: {
      type: Number,
      default: null,
    },
    icon : {
      type: String,
      default: 'lightbulb',
    }
  },

  setup(props) {

     const options = {
      responsive: true,
      layout: {
        padding: 60,
      },
      // maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "white",
          },
        },
      },
    };

    const pieRef = ref(null);

    const Target = 100;

    let scoreAsPercentage = 70;

    const myChartData = reactive({
      value: 600,
    });

    const remainingScore = reactive({
      value: computed(() => Target - props.score),
    });

    let chartData = reactive({
      labels: ["Life Insurance", "Serious Illness", "Mortgage Protection"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: ['lightgreen', 'lightyellow', 'lightblue'],
          borderwidth: 1,
          data: [20, 60, 20],
          color: "white",
        },
      ],
    });

    function updateChart() {
      myChartData.value += 100;

      if (pieRef.value) {
        pieRef.value.update();
      }
      console.log(myChartData.value);
      console.log(remainingScore.value);
      console.log("score as percentage is now", scoreAsPercentage);
    }

    return {
      chartData,
      updateChart,
      myChartData,
      scoreAsPercentage,
      Target,
      options,
    };
  },
});
</script>

<style lang="scss" scoped>
.chartWrapper {
  min-width: 250px;
  max-height: 300px;
  margin: 0 auto;
  border: 1px solid rgba(128, 128, 128, 0.068);
  border-radius: 16px;
  position: relative;
  color: white;
  text-align: center;
  background: $chart-background;
  width: 100%;
  display: grid;
  place-items: center;
  grid-area: b;
}

</style>
