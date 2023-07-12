import { defineConfig } from 'vuepress/config';
import nav from './conf/nav';
import sidebar from './conf/sidebar';

export default defineConfig({
  /**
   * 基础路径
   * 它的值应当总是以斜杠开始，并以斜杠结束
   */
  base: '/blog/',

  /**
   * 网站的标题
   * 它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
   */
  title: '雨停の精神時光屋',

  /**
   * 网站的描述
   * 它将会以 <meta> 标签渲染到当前页面的 HTML 中
   */
  description: '',

  /**
   * 额外的需要被注入到当前页面的 HTML <head> 中的标签
   * 每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
   */
  head: [
    ['link', { rel: 'icon', href: '/assets/image/logo.svg' }]
  ],

  /**
   * dev server 的主机名，默认 0.0.0.0
   */
  host: '0.0.0.0',

  /**
   * dev server 的端口，默认 8080
   */
  port: 8080,

  /**
   * 主题配置
   */
  themeConfig: {
    /**
     * 导航栏
     * 如果开启了多语言配置，locales 内部的 nav 会覆盖这里的配置
     */
    nav,

    /**
     * 侧边栏
     */
    sidebar,

    /**
     * 启用页面滚动效果
     */
    smoothScroll: true,
  },

  /**
   * 插件
   */
  plugins: [],

  /**
   * Markdown 配置
   */
  markdown: {
    /**
     * 是否在每个代码块的左侧显示行号，默认 undefined
     */
    lineNumbers: true,
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@read': '../../read',
      },
    },
  },
});
