<template lang="pug">
main.mainWrapper
  section.cards
    ui-card
      font-awesome-icon(:icon="['fas','lightbulb']")
      .stat
        p Energy
        h3 64
    ui-card
      font-awesome-icon(:icon="['fas','lightbulb']")
      .stat
        p Commercial Energy
        h3 19
    ui-card
      font-awesome-icon(:icon="['fas','wifi']")
      .stat
        p Broadband
        h3 35
    ui-card
      font-awesome-icon(:icon="['fas','house']")
      .stat
        p Home Insurance
        h3 18
    ui-card
      font-awesome-icon(:icon="['fas','car']")
      .stat
        p Car Insurance
        h3 4
    ui-card
      font-awesome-icon(:icon="['fas','life-ring']")
      .stat
        p Life Insurance
        h3 4
    ui-card
      font-awesome-icon(:icon="['fas','person-walking-with-cane']")
      .stat
        p Serious Illness
        h3 0
    ui-card
      font-awesome-icon(:icon="['fas','house-lock']")
      .stat
        p Mortgage Protection
        h3 5
    ui-card
      font-awesome-icon(:icon="['fas','house-user']")
      .stat
        p Mortgages
        h3 95 + 2
    ui-card
      font-awesome-icon(:icon="['fas','hand-holding-dollar']")
      .stat
        p Loans
        h3 19
    ui-card
      font-awesome-icon(:icon="['fas','money-bill-transfer']")
      .stat
        p Current Accounts
        h3 22
    ui-card
      font-awesome-icon(:icon="['fas','money-bill-trend-up']")
      .stat
        p Savings Accounts
        h3 22
    ui-card
      font-awesome-icon(:icon="['fas','credit-card']")
      .stat
        p Prepaid Cards
        h3 5
    ui-card
      font-awesome-icon(:icon="['fas','credit-card']")
      .stat
        p Credit Cards
        h3 623   
    GaugeCharts 
    PieChart          
</template>

<script setup>
import UiButton from "@/components/ui/UiButton.vue";
import UiCard from "@/components/ui/UiCard.vue";
import UiPill from "@/components/ui/UiPill.vue";
import GaugeCharts from "@/components/GaugeCharts.vue";
import PieChart from "@/components/PieChart.vue";
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  padding: 1rem;
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
  padding: 10px;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
  font-size: 16px;
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

    :deep(p) {
      font-size: 12px;
      color: pink !important;
    }
  }
}
</style>
