<template lang="pug">
section
  .chartSection
    MyChart
    GaugeChart(:key="newKey" :score="Score")
    <button @click="forceRerender">Refresh Chart by updating key</button>  

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
import MyChart from "@/components/my-chart.vue";
import GaugeChart from "@/components/gauge-chart.vue";
import Chart from "chart.js/auto";

const newKey = ref(0);

let Score = 700;

const forceRerender = () => {
  
  newKey.value += 1;
  console.log("newKey is", newKey.value);
  Score += 100;
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.pills {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.chartSection {
  background-color: white;
  padding: 1rem;
}
</style>
