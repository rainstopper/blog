import { SidebarConfig } from 'vuepress';

export default {
  '/java/jvm/': [
    {
      text: 'JVM',
      collapsible: false,
      // sidebarDepth: 2,
      children: [
        // 介绍
        '/java/jvm/',
        // 字节码
        '/java/jvm/bytecode',
      ],
    },
  ],
} as SidebarConfig;
