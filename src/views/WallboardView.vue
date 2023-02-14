<template lang="pug">
main
  h1 At a glance...
  ui-card(:full-width="true")
    .stats
      .stat
        h5 Total
        h3 316
      .stat
        h5 Registrations
        h3 139
  section.cards
    ui-card
      font-awesome-icon(:icon="['fas','lightbulb']")
      .stat
        h5 Energy
        h3 64
    ui-card
      font-awesome-icon(:icon="['fas','lightbulb']")
      .stat
        h5 Commercial Energy
        h3 19
    ui-card
      font-awesome-icon(:icon="['fas','wifi']")
      .stat
        h5 Broadband
        h3 35
    ui-card
      font-awesome-icon(:icon="['fas','house']")
      .stat
        h5 Home Insurance
        h3 18
    ui-card
      font-awesome-icon(:icon="['fas','car']")
      .stat
        h5 Car Insurance
        h3 4
    ui-card
      font-awesome-icon(:icon="['fas','life-ring']")
      .stat
        h5 Life Insurance
        h3 4
    ui-card
      font-awesome-icon(:icon="['fas','person-walking-with-cane']")
      .stat
        h5 Serious Illness
        h3 0
    ui-card
      font-awesome-icon(:icon="['fas','house-lock']")
      .stat
        h5 Mortgage Protection
        h3 5
    ui-card
      font-awesome-icon(:icon="['fas','house-user']")
      .stat
        h5 Mortgages
        h3 95 + 2
    ui-card
      font-awesome-icon(:icon="['fas','hand-holding-dollar']")
      .stat
        h5 Loans
        h3 19
    ui-card
      font-awesome-icon(:icon="['fas','money-bill-transfer']")
      .stat
        h5 Current Accounts
        h3 22
    ui-card
      font-awesome-icon(:icon="['fas','money-bill-trend-up']")
      .stat
        h5 Savings Accounts
        h3 22
    ui-card
      font-awesome-icon(:icon="['fas','credit-card']")
      .stat
        h5 Prepaid Cards
        h3 5
    ui-card
      font-awesome-icon(:icon="['fas','credit-card']")
      .stat
        h5 Credit Cards
        h3 623
</template>

<script setup>
import UiButton from "@/components/ui/UiButton.vue";
import UiCard from "@/components/ui/UiCard.vue";
import UiPill from "@/components/ui/UiPill.vue";
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  padding: 1rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
}

.stats {
  display: flex;
  gap: 1rem;
  justify-content: space-around;

  .stat {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}
</style>
