<!-- Grid Row -->

<template>
  <div class="grid-row" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'grid-row',

  props: {
    /**
     * Gutter
     */
    gutter: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    /**
     * Half value of the gutter
     * @return {Number}
     */
    halfGutter() {
      return this.gutter / 2;
    },

    /**
     * Style
     * @return {Object}
     */
    style() {
      const halfMargin = `-${this.halfGutter}px`;
      return { margin: halfMargin };
    },
  },
};
</script>

<style scoped>
.grid-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
</style>
