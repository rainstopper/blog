import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import navbar from './config/navbar';
import sidebar from './config/sidebar';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  /**
   * 基础路径
   */
  base: '/blog/',

  /**
   * 标题
   */
  title: '雨停の精神時光屋',

  /**
   * 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
   */
  head: [
    ['link', { rel: 'icon', href: '/images/logo.svg' }],
  ],

  /**
   * 开发环境主机名
   */
  host: '0.0.0.0',

  /**
   * 开发环境端口
   */
  port: 8080,

  /**
   * 主题
   */
  theme: defaultTheme({
    navbar,

    sidebar,
  }),

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
  },
});
