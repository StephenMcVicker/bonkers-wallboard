<template lang="pug">
section
  .cards
    ui-card(:full-width="true")
      h3 This is a card with a header
      .pills
        ui-pill(kind="primary" text="Primary Pill")
        ui-pill(kind="danger" text="Danger Pill")
        ui-pill(kind="warning" text="Warning Pill")
        ui-pill(text="Default Pill")
      p This is a full width card
      ui-button(iconLeft="user"
                text="button with an icon")
    ui-card
      p This is a card
    ui-card
      p This is a card
    ui-card
      p This is a card
</template>

<script setup>
import UiButton from "@/components/ui/UiButton.vue";
import UiCard from "@/components/ui/UiCard.vue";
import UiPill from "@/components/ui/UiPill.vue";
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
</style>
