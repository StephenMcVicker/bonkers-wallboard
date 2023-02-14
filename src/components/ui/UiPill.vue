<template lang="pug">
.ui-pill(:class="`${kind}`")
  p {{ text }}
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  kind: "primary" | "secondary" | "danger" | "warning";
  text?: string | null;
}

export default defineComponent({
  props: {
    kind: {
      type: String,
      default: "primary",
      validator: (value: string) =>
        ["primary", "secondary", "danger", "warning"].includes(value),
    },
    text: {
      type: String,
      default: null,
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
  align-items: center;
  background: $color-secondary-alt;
  border-radius: 50vh;
  display: inline-flex;
  justify-content: center;
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

  p {
    font-size: 0.5rem;
    font-weight: 600;
    margin: 0;
  }
}
</style>
