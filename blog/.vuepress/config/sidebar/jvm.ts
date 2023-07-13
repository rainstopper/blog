import { SidebarConfig } from 'vuepress';

export default {
  '/java/jvm/': [
    {
      text: 'JVM',
      collapsible: false,
      // sidebarDepth: 2,
      children: [
        // 介绍
        '',
        // 字节码
        'bytecode',
      ],
    },
  ],
} as SidebarConfig;
