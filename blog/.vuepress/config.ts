import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import navbar from './config/navbar';
import sidebar from './config/sidebar';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: '/blog/',

  title: '雨停の精神時光屋',

  description: '',

  head: [
    ['link', { rel: 'icon', href: '/images/logo.svg' }],
  ],

  host: '0.0.0.0',

  port: 8080,

  theme: defaultTheme({
    navbar,

    sidebar,
  }),
  // themeConfig: {
  //   /**
  //    * 导航栏
  //    * 如果开启了多语言配置，locales 内部的 nav 会覆盖这里的配置
  //    */
  //   nav,

  //   /**
  //    * 侧边栏
  //    */
  //   sidebar,

  //   /**
  //    * 启用页面滚动效果
  //    */
  //   smoothScroll: true,
  // },

  /**
   * 插件
   */
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

  /**
   * Markdown 配置
   */
  markdown: {
    /**
     * 是否在每个代码块的左侧显示行号，默认 undefined
     */
    // lineNumbers: true,
  },
});
