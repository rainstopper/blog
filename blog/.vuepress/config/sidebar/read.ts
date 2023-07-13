import { SidebarConfig } from 'vuepress';

export default {
  '/read/7-rules-of-power/': [
    {
      text: '7 Rules of Power',
      children: [
        '/read/7-rules-of-power/',
        '/read/7-rules-of-power/translation-contents',
        '/read/7-rules-of-power/translation-in-the-beginning',
      ],
    },
  ],
} as SidebarConfig;
