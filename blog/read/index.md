---
title: 阅读
sidebar: auto
---

# 阅读

## 权力

<book-catalog :data="power" />

## 其他

<book-catalog :data="other" />

<script setup>
import { withBase } from '@vuepress/client';

const sevenRulesOfPower = withBase('/images/books/7-rules-of-power_cover.png');

const power = [
  {
    cover: sevenRulesOfPower,
    name: '7 Rules of Power',
    author: 'Jeffrey Pfeffer',
    href: './7-rules-of-power/',
  },
  {
    cover: sevenRulesOfPower,
    name: '7 Rules of Power',
    author: 'Jeffrey Pfeffer',
    href: './7-rules-of-power/',
  },
  {
    cover: sevenRulesOfPower,
    name: '7 Rules of Power',
    author: 'Jeffrey Pfeffer',
    href: './7-rules-of-power/',
  },
  {
    cover: sevenRulesOfPower,
    name: '7 Rules of Power',
    author: 'Jeffrey Pfeffer',
    href: './7-rules-of-power/',
  },
  {
    cover: sevenRulesOfPower,
    name: '7 Rules of Power',
    author: 'Jeffrey Pfeffer',
    href: './7-rules-of-power/',
  },
];

const other = [
  {
    cover: sevenRulesOfPower,
    name: '7 Rules of Power',
    author: 'Jeffrey Pfeffer',
    href: './7-rules-of-power/',
  },
  {
    cover: sevenRulesOfPower,
    name: '7 Rules of Power',
    author: 'Jeffrey Pfeffer',
    href: './7-rules-of-power/',
  },
];
</script>

<style scoped>
.book-catalog {
  margin-top: 1em;
}
</style>
