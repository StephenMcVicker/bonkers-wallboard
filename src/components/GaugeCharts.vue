<template lang="pug">
.chartSection
  GaugeChart(:key="newKey" :score="Score" :scoreAsPercent="scoreAsPercent")
  GaugeChart(:key="newKey" :score="Score" :scoreAsPercent="scoreAsPercent" icon="wifi")
  GaugeChart(:key="newKey" :score="Score" :scoreAsPercent="scoreAsPercent" icon="house")
  GaugeChart(:key="newKey" :score="Score" :scoreAsPercent="scoreAsPercent" icon="car")
  GaugeChart(:key="newKey" score=85 :scoreAsPercent="scoreAsPercent" icon="umbrella")
  GaugeChart(:key="newKey" :score="Score" :scoreAsPercent="scoreAsPercent" icon="wifi")

  button(@click="forceRerender") Add 1
  //- Refresh Chart by updating key (also adds 1 to score)

  //- .cards
  //-   ui-card(:full-width="true")
  //-     h3 This is a card with a header
  //-     .pills
  //-       ui-pill(kind="primary" text="Primary Pill")
  //-       ui-pill(kind="danger" text="Danger Pill")
  //-       ui-pill(kind="warning" text="Warning Pill")
  //-       ui-pill(text="Default Pill")
  //-     p This is a full width card
  //-     ui-button(iconLeft="user"
  //-               text="button with an icon")
  //-   ui-card
  //-     p This is a card
  //-   ui-card
  //-     p This is a card
  //-   ui-card
  //-     p This is a card
</template>

<script setup>
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
  computed,
  watch,
} from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiCard from "@/components/ui/UiCard.vue";
import UiPill from "@/components/ui/UiPill.vue";
import MyChart from "@/components/MyChart.vue";
import GaugeChart from "@/components/gauge-chart.vue";
import Chart from "chart.js/auto";

const newKey = ref(0);

let Score = 72;

// Score will come from the back-end and update as conversions come in, 500 is just for example. Score should reset to 0 every day at midnight
let scoreAsPercent = computed(() => (Score / 100) * 100).value;

const forceRerender = () => {
  
  newKey.value += 1;
  console.log("newKey is", newKey.value);
  Score += 1;
  scoreAsPercent = computed(() => (Score / 100) * 100).value;
  console.log("score is", Score);
  console.log('score as percent is', scoreAsPercent);
};
</script>

<style lang="scss" scoped>

.chartSection {
  background: $chart-background;
  border: 1px solid rgba(128, 128, 128, 0.328);
  display: flex;
  border-radius: 16px;
  flex-wrap: wrap;
  width: 100%;
  position: relative;

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-area: a;
  }
}

button {
  border-radius: 10px;
  margin: 0px auto;
  position: absolute;
  padding: 5px 10px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
</style>
