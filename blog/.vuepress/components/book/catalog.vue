<!-- Book Catalog -->

<template>
  <div class="book-catalog">
    <grid-row :gutter="20">
      <grid-col v-for="(book, index) in data" :key="index" :span="25">
        <book-link
          :cover="book.cover"
          :name="book.name"
          :author="book.author"
          :href="book.href"
        />
      </grid-col>
    </grid-row>
  </div>
</template>

<script>
export default {
  name: 'book-catalog',

  props: {
    /**
     * Data
     */
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
