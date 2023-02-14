<template lang="pug">
.ui-pill(:class="`${kind}`")
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  kind: "primary" | "secondary" | "danger" | "warning";
}

export default defineComponent({
  props: {
    kind: {
      type: String,
      default: "primary",
      validator: (value: string) =>
        ["primary", "secondary", "danger", "warning"].includes(value),
    },
  },
  setup(props: Props) {
    // component logic goes here
    return {};
  },
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
