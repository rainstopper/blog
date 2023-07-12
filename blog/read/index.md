---
title: 阅读
sidebar: auto
---

# 阅读

## 权力

<book-catalog :data="power" />

## 其他

<book-catalog :data="other" />

<script>
export default {
  data() {
    return {
      power: [
        {
          cover: require('./7-rules-of-power/images/7-rules-of-power_cover.png'),
          name: '7 Rules of Power',
          author: 'Jeffrey Pfeffer',
          href: './7-rules-of-power/',
        },
        {
          cover: require('./7-rules-of-power/images/7-rules-of-power_cover.png'),
          name: '7 Rules of Power',
          author: 'Jeffrey Pfeffer',
          href: './7-rules-of-power/',
        },
        {
          cover: require('./7-rules-of-power/images/7-rules-of-power_cover.png'),
          name: '7 Rules of Power',
          author: 'Jeffrey Pfeffer',
          href: './7-rules-of-power/',
        },
        {
          cover: require('./7-rules-of-power/images/7-rules-of-power_cover.png'),
          name: '7 Rules of Power',
          author: 'Jeffrey Pfeffer',
          href: './7-rules-of-power/',
        },
        {
          cover: require('./7-rules-of-power/images/7-rules-of-power_cover.png'),
          name: '7 Rules of Power',
          author: 'Jeffrey Pfeffer',
          href: './7-rules-of-power/',
        },
      ],
      other: [
        {
          cover: require('./7-rules-of-power/images/7-rules-of-power_cover.png'),
          name: '7 Rules of Power',
          author: 'Jeffrey Pfeffer',
          href: './7-rules-of-power/',
        },
        {
          cover: require('./7-rules-of-power/images/7-rules-of-power_cover.png'),
          name: '7 Rules of Power',
          author: 'Jeffrey Pfeffer',
          href: './7-rules-of-power/',
        },
      ],
    };
  },
};
</script>

<style scoped>
.book-catalog {
  margin-top: 1em;
}
</style>
