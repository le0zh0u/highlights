import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '海螺笔记',
  description: '海螺笔记的文档站点',
  theme: defaultTheme({
    // 默认主题配置
    logo: '/images/logo.png',
    repo: 'https://github.com/le0zh0u/highlights-doc',
    navbar: [
      {
        text: '指南',
        link: '/guide',
      },
    ],
    sidebar: {
        '/guide/': [
          {
            text: '指南',
            children: ['/guide/README.md','/guide/getting-started.md'],
          },
        ],
        '/reference/': [
          {
            text: 'Reference',
            children: ['/reference/cli.md', '/reference/config.md'],
          },
        ],
      },
  }),
})