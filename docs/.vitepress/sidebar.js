import { defineConfig } from 'vitepress';

export default function sidebar() {
  return defineConfig({
    themeConfig: {
      sidebar: {
        '/resources/': [
          {
            text: '语言',
            collapsible: true,
            items: [
              {
                text: 'JS',
                items: [
                  { text: '书籍', link: '/resources/language/JS/books' },
                  { text: '网站', link: '/resources/language/JS/sites' },
                  { text: '仓库', link: '/resources/language/JS/repos' },
                  { text: '视频教程', link: '/resources/language/JS/videos' },
                ],
              },
              {
                text: 'TS',
                items: [
                  { text: '书籍', link: '#' },
                  { text: '仓库', link: '#' },
                  { text: '网站', link: '#' },
                  { text: '视频教程', link: '#' },
                ],
              },
              {
                text: 'HTML',
                items: [
                  { text: '书籍', link: '#' },
                  { text: '仓库', link: '#' },
                  { text: '网站', link: '#' },
                  { text: '视频教程', link: '#' },
                ],
              },
              {
                text: 'CSS',
                items: [
                  { text: '书籍', link: '#' },
                  { text: '仓库', link: '#' },
                  { text: '网站', link: '#' },
                  { text: '视频教程', link: '#' },
                ],
              },
            ],
          },
          {
            text: '框架',
            collapsible: true,
            items: [
              {
                text: 'Vue',
                items: [
                  { text: '书籍', link: '#' },
                  { text: '仓库', link: '#' },
                  { text: '网站', link: '#' },
                  { text: '视频教程', link: '#' },
                ],
              },
              {
                text: 'React',
                items: [
                  { text: '书籍', link: '#' },
                  { text: '仓库', link: '#' },
                  { text: '网站', link: '#' },
                  { text: '视频教程', link: '#' },
                ],
              },
            ],
          },
          {
            text: '其他',
            collapsible: true,
            items: [
              {
                text: 'Github Actions',
                link: 'resources/other/github_actions',
              },
            ],
          },
        ],
        '/tools/': [],
        '/articles/': [],
        '/FENext/': [],
      },
    },
  }).themeConfig?.sidebar;
}
