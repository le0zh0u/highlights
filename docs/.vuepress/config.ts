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
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
    ],
    sidebar: {
        '/guide/': [
          {
            text: '使用说明',
            children: ['/guide/README.md'],//, '/guide/R1.md'
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