<template lang="pug">
button
  font-awesome-icon(v-if="props.iconLeft"
                    :icon="['far', props.iconLeft]")
  span {{ props.text }}
  font-awesome-icon(v-if="props.iconRight"
                    :icon="['far', props.iconRight]")
</template>

<script setup lang="ts">
export interface Props {
  iconLeft?: string | null;
  iconRight?: string | null;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconLeft: null,
  iconRight: null,
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
  display: inline-flex;
  gap: 0.5rem;
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
