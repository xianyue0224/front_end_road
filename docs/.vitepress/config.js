import { defineConfig } from 'vitepress';
import nav from './nav';
import sidebar from './sidebar';

export default defineConfig({
  // 构建、部署
  base: '/',

  // 主题
  title: '前端之路',
  description: '分享与前端相关的资源，助力初学者快速成长！',
  lang: 'zh',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '前端之路',
    logo: '/logo/favicon-32x32.png',
    lastUpdatedText: '上次更新于',
    editLink: {
      pattern: '#',
      text: '编辑此页面',
    },
    outline: 'deep',
    outlineTitle: '此页标题',
    socialLinks: [{ icon: 'github', link: '#' }],
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    nav: nav(),
    sidebar: sidebar(),
  },
});
