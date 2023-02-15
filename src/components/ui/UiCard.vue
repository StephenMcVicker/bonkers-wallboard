<template lang="pug">
.ui-card(:class="{ 'full-width': fullWidth }")
  slot(name="header")
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    // component logic goes here
  },
});
</script>

<style lang="scss" scoped>
.ui-card {
  position: relative;
  min-width: 50px;
  min-height: 50px;
  background: #ffffff;
  border-radius: $border-radius;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border: 1px solid $color-secondary-alt;
  min-width: 200px;
  padding: 2rem;

  &.full-width {
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    background: $color-dark;
    border-color: rgba($color-bonkers-mint, 0.2);
    box-shadow: rgba(94, 94, 134, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    color: $color-grey;
  }
}
</style>
