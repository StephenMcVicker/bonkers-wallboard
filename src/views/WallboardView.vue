<template lang="pug">
main.mainWrapper
  section.cards
    ui-card
      font-awesome-icon(:icon="['fas','lightbulb']")
      .stat
        p Energy
        p.conversions 64
    ui-card
      font-awesome-icon(:icon="['fas','lightbulb']")
      .stat
        p Commercial Energy
        p.conversions 19
    ui-card
      font-awesome-icon(:icon="['fas','wifi']")
      .stat
        p Broadband
        p.conversions 35
    ui-card
      font-awesome-icon(:icon="['fas','house']")
      .stat
        p Home Insurance
        p.conversions 18
    ui-card
      font-awesome-icon(:icon="['fas','car']")
      .stat
        p Car Insurance
        p.conversions 4
    ui-card
      font-awesome-icon(:icon="['fas','life-ring']")
      .stat
        p Life Insurance
        p.conversions 4
    ui-card
      font-awesome-icon(:icon="['fas','person-walking-with-cane']")
      .stat
        p Serious Illness
        p.conversions 0
    ui-card
      font-awesome-icon(:icon="['fas','house-lock']")
      .stat
        p Mortgage Protection
        p.conversions 5
    ui-card
      font-awesome-icon(:icon="['fas','house-user']")
      .stat
        p Mortgages
        p.conversions 95 + 2
    ui-card
      font-awesome-icon(:icon="['fas','hand-holding-dollar']")
      .stat
        p Loans
        p.conversions 19
    ui-card
      font-awesome-icon(:icon="['fas','money-bill-transfer']")
      .stat
        p Current Accounts
        p.conversions 22
    ui-card
      font-awesome-icon(:icon="['fas','money-bill-trend-up']")
      .stat
        p Savings Accounts
        p.conversions 22
    ui-card
      font-awesome-icon(:icon="['fas','credit-card']")
      .stat
        p Prepaid Cards
        p.conversions 5
    ui-card
      font-awesome-icon(:icon="['fas','credit-card']")
      .stat
        p Credit Cards
        p.conversions 623 
  .gauges            
    GaugeCharts 
    PieChart
    .redDiv
      LineChart 
    .blueDiv 
      MyChart
</template>

<script setup>
import UiButton from "@/components/ui/UiButton.vue";
import UiCard from "@/components/ui/UiCard.vue";
import UiPill from "@/components/ui/UiPill.vue";
import GaugeCharts from "@/components/GaugeCharts.vue";
import PieChart from "@/components/PieChart.vue";
import MyChart from "@/components/MyChart.vue";
import LineChart from "@/components/LineChart.vue";
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  padding: 1rem;
  padding-top: 0;
}

h3 {
  color: $color-dark;

  @media (prefers-color-scheme: dark) {
    color: $color-white;
  }
}

svg {
  color: $color-bonkers-mint;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
  font-size: 16px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
}

.stats {
  gap: 1rem;
  justify-content: space-around;
  font-size: 16px;
  align-items: center;

  .stat {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
}

.gauges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-areas:
      "a a"
      "b c"
      "b d";
  }
}

.conversions {
  font-size: 1.25rem;
  font-weight: 700;
}

.redDiv {
  background-color: $chart-background;
  height: 170px;
  position: relative;
  width: 100%;
  border-radius: 10px;
  grid-area: c;
}

.blueDiv {
  background-color: $chart-background;
  height: 100px;
  border-radius: 10px;
  width: 100%;
  grid-area: d;
}

@media screen and (min-width: 1000px) {
  .redDiv {
    min-width: 600px;
  }

  .blueDiv {
    min-width: 600px;
  }
}

@media screen and (min-width: 1800px) {
  .redDiv {
    height: 200px;
  }

  .blueDiv {
    height: 160px !important;
  }
}
</style>
