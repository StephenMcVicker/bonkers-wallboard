<template lang="pug">
.ui-card(:class="{ 'full-width': props.fullWidth }")
  slot(name="header")
  slot
</template>

<script setup lang="ts">
export interface Props {
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fullWidth: false,
});
</script>

<style lang="scss" scoped>
.ui-card {
  position: relative;
  min-width: 50px;
  min-height: 50px;
  background: #ffffff;
  border-radius: $border-radius;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: 1px solid $color-secondary-alt;
  padding: 2rem;

  &.full-width {
    width: 100%;
  }
}
</style>
