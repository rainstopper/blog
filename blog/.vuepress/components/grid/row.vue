<!-- Grid Row -->

<template>
  <div class="grid-row" :style="{ margin: `-${halfGutter}px` }">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  /**
   * Gutter
   */
  gutter: {
    type: Number,
    default: 0,
  },
});

/**
 * Half value of the gutter
 */
const halfGutter = computed(() => props.gutter / 2);

defineExpose({
  name: 'grid-row',
  halfGutter,
});
</script>

<style scoped>
.grid-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
</style>
