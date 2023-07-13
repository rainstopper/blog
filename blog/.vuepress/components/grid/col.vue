<!-- Grid Col -->

<template>
  <div
    class="grid-col"
    :style="{ width: `${span}%`, padding: `${getHalfGutter($parent)}px` }"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  /**
   * Span
   */
  span: {
    type: Number,
    default: 100,
  },
});

/**
 * Get half gutter from parents
 */
const getHalfGutter = el => {
  let row = el;
  while (row) {
    if (row.name === 'grid-row') {
      return row.halfGutter;
    }
    row = row.$parent;
  }
  return 0;
};
</script>

<style scoped>
.grid-col {
  box-sizing: border-box;
}
</style>
