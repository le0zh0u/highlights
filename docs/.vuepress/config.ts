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
      {
        text: '笔记导入',
        link: '/import',
      },
    ],
    sidebar: {
        '/guide/': [
          {
            text: '指南',
            children: ['/guide/README.md','/guide/getting-started.md','/guide/book-manage.md','/guide/import-annotation.md','/guide/annotation.md', '/guide/daily-review.md', '/guide/tag-system.md','/guide/sync-data.md','/guide/extensions.md'],
          },
        ],
        '/import/': [
          {
            text: '笔记导入',
            children: ['/import/README.md', '/import/weread.md'],
          },
        ],
      },
  }),
})