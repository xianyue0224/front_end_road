import { defineConfig } from 'vitepress';

export default function nav() {
  return defineConfig({
    themeConfig: {
      nav: [
        {
          text: '语言',
          activeMatch: '/language/',
          items: [
            {
              text: 'JavaScript',
              link: '/language/js/index',
              activeMatch: '/language/js/',
            },
            {
              text: 'TypeScript',
              link: '/language/ts/index',
              activeMatch: '/language/ts/',
            },
            {
              text: 'HTML5+CSS3',
              link: '/language/html_css/overview',
              activeMatch: '/language/html_css/',
            },
          ],
        },
      ],
    },
  }).themeConfig?.nav;
}
