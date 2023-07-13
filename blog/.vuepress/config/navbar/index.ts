import { NavbarConfig } from 'vuepress';

export default [
  // { text: '前端', link: '/front-end/' },
  {
    text: '后端',
    children: [
      {
        text: 'Java',
        children: [
          { text: 'JVM', link: '/java/jvm/' },
        ],
      },
    ],
  },
  {
    text: '学习',
    children: [
      { text: '阅读', link: '/read/' },
    ],
  },
] as NavbarConfig;
