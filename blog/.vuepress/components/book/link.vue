<!-- Book Link -->

<template>
  <a class="book-link" :href="href">
    <img v-if="cover" class="book-link-cover" :src="cover" />
    <p>{{ name }}</p>
    <p>{{ author }}</p>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  /**
   * Cover Image
   */
  cover: String,

  /**
   * Name
   */
  name: String,

  /**
   * Author
   */
  author: String,

  /**
   * href
   */
  href: String,
});
</script>

<style lang="scss" scoped>
.book-link {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover &-cover {
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.3);
  }

  & p {
    margin: 0;
    padding: 0;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
