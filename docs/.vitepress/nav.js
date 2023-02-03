import { defineConfig } from 'vitepress';

export default function nav() {
  return defineConfig({
    themeConfig: {
      nav: [
        {
          text: '学习资源',
          activeMatch: '/resources/',
          items: [
            {
              text: '语言',
              items: [
                {
                  text: 'JS',
                  link: '/resources/language/JS/index',
                  activeMatch: '/resources/language/JS/',
                },
                {
                  text: 'TS',
                  link: '/resources/language/TS/index',
                  activeMatch: '/resources/language/TS/',
                },
                {
                  text: 'HTML',
                  link: '/resources/language/HTML/index',
                  activeMatch: '/resources/language/HTML/',
                },
                {
                  text: 'CSS',
                  link: '/resources/language/CSS/index',
                  activeMatch: '/resources/language/CSS/',
                },
              ],
            },
            {
              text: '框架',
              items: [
                {
                  text: 'Vue',
                  link: '/resources/frame/vue/index',
                  activeMatch: '/resources/frame/vue/',
                },
                {
                  text: 'React',
                  link: '/resources/frame/react/index',
                  activeMatch: '/resources/frame/react/',
                },
              ],
            },
            {
              text: '其他',
              items: [
                {
                  text: 'Github Actions',
                  link: '/resources/other/github_actions',
                  activeMatch: '/resources/other/github_actions',
                },
              ],
            },
          ],
        },
        {
          text: '效率工具',
          items: [
            { text: '编辑器', items: [{ text: 'VSCode', link: '#' }] },
            {
              text: '浏览器插件',
              link: '#',
            },
            {
              text: '多媒体处理',
              link: '#',
            },
            {
              text: '待补充……',
              link: '#',
            },
          ],
        },
        { text: '好文推荐', link: '#' },
        { text: '前端岗哨', link: '#' },
      ],
    },
  }).themeConfig?.nav;
}
