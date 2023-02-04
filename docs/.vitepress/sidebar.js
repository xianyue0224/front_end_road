import { defineConfig } from 'vitepress';

export default function sidebar() {
  return defineConfig({
    themeConfig: {
      sidebar: {
        '/language/html_css/': [
          {
            text: 'HTML5+CSS3',
            collapsible: true,
            items: [
              { text: '总览', link: '/language/html_css/overview' },
              { text: '学习路线', link: '/language/html_css/guide' },
              { text: '视频教程', link: '/language/html_css/video' },
              { text: '练习案例', link: '/language/html_css/practice' },
              { text: '书籍 & 参考资料', link: '/language/html_css/reference' },
              { text: '工具', link: '/language/html_css/tool' },
              {
                text: '值得关注的内容创作者',
                link: '/language/html_css/channel',
              },
            ],
          },
        ],
      },
    },
  }).themeConfig?.sidebar;
}
