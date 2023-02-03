import { defineConfig } from 'vitepress';

export default function nav() {
  return defineConfig({
    themeConfig: {
      nav: [
        {
          text: '语言',
          activeMatch: '/language',
          items: [
            {
              text: 'JavaScript',
              link: '/language/js/index',
            },
            {
              text: 'TypeScript',
              link: '/language/ts/index',
              activeMatch: '/resources/language/TS/',
            },
            {
              text: 'HTML5+CSS3',
              link: '/language/html_css/index',
            }
          ],
        },
      ],
    },
  }).themeConfig?.nav;
}
