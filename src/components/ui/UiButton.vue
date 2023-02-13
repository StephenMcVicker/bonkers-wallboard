<template lang="pug">
button
  slot(name="icon-left")
  span {{ props.text }}
  slot(name="icon-right")
</template>

<script setup lang="ts">
export interface Props {
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
});
</script>

<style lang="scss" scoped>
button {
  background: $color-bonkers;
  color: $color-white;
  cursor: pointer;
  border: 0;
  border-radius: 50vh;
  padding: 1rem 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: darken($color: $color-bonkers, $amount: 10%);
  }

  span {
    font-weight: 700;
  }
}
</style>
