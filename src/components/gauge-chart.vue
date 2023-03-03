<template lang="pug">
.chartWrapper
  doughnut(ref="doughnutRef" :data="chartData" :options="options")
  span.scorePercent {{ scoreAsPercent }}%
  span.icon 
    font-awesome-icon(:icon="['fas',`${icon}`]")
  span.score Score = {{ score }}
  span.score Target = {{ Target }}
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
      plugins: {
        legend: {
          display: false,
          position: "bottom",
        },
      },
    };

    const doughnutRef = ref(null);

    const Target = 100;

    let variableColour = "lightgreen";
    if (props.scoreAsPercent < 50) {
      variableColour = "red";
    } else if (props.scoreAsPercent < 75) {
      variableColour = "orange";
    } else if (props.scoreAsPercent < 100) {
      variableColour = "lightgreen";
    } else {
      variableColour = "green";
    }

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

      if (doughnutRef.value) {
        doughnutRef.value.update();
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
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  width: 250px;
  border: 1px solid rgba(128, 128, 128, 0.068);
  border-radius: 16px;
  position: relative;
  background: $chart-background;

  @media screen and (min-width: 1200px) {
    width: 218px;
  }

  @media screen and (min-width: 1800px) {
    width: 302px;
  }
}

.scorePercent {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  font-size: 1rem;
}

.score {
  position: relative;
  font-size: 10px;
  padding: 10px 10px;
  left: 15%;
  text-align: center;
}

.icon {
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  font-size: 1rem;
}
</style>
