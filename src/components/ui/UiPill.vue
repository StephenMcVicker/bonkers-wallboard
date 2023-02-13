<template lang="pug">
.ui-pill(:class="`${props.kind}`")
  slot
</template>

<script setup lang="ts">
export interface Props {
  kind?: string;
}

const props = withDefaults(defineProps<Props>(), {
  kind: "",
});
</script>

<style lang="scss" scoped>
.ui-pill {
  background: $color-secondary-alt;
  border-radius: 50vh;
  display: inline-flex;
  font-size: 0.5rem;
  font-weight: 600;
  padding: 4px 8px;
  position: relative;

  &.primary {
    background: $color-accents-alt;
    color: $color-white;
  }

  &.danger {
    background: $color-danger;
    color: $color-white;
  }

  &.warning {
    background: $color-orange-alt;
    color: $color-white;
  }
}
</style>
