<!-- Grid Col -->

<template>
  <div class="grid-col" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'grid-col',

  props: {
    /**
     * Span
     */
    span: {
      type: Number,
      default: 100,
    },
  },

  computed: {
    /**
     * Style
     * @return {Object}
     */
    style() {
      const halfPadding = `${this.$parent.halfGutter || 0}px`;
      return { width: `${this.span}%`, padding: halfPadding };
    },
  },
};
</script>

<style scoped>
.grid-col {
  box-sizing: border-box;
}
</style>
