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
      {
        text: '方法论',
        link: '/methodology',
      },
      {
        text: '常见问题',
        link: '/question',
      },
      {
        text: '所思所想',
        link: '/thoughts',
      },
      {
        text: '联系我',
        link: '/general/contact',
      },
      {
        text: '更多',
        children: [{
          text: '更新记录',
          link: '/general/changeLog',
          activeMatch: '/general/changeLog',
        }, {
          text: '使用条款',
          link: '/general/terms',
          activeMatch: '/general/terms',
        }, {
          text: '隐私政策',
          link: '/general/privacy',
          // 该元素在当前路由路径是 /foo/ 开头时激活
          // 支持正则表达式
          activeMatch: '/general/privacy',
        },],
      },
    ],
    sidebar: {
        '/guide': [
          {
            text: '指南',
            children: ['/guide/README.md','/guide/getting-started.md','/guide/book-manage.md','/guide/import-annotation.md','/guide/annotation.md', '/guide/daily-review.md', '/guide/tag-system.md','/guide/sync-data.md','/guide/extensions.md','/guide/export.md'],
          },
        ],
        '/import': [
          {
            text: '笔记导入',
            children: ['/import/README.md', '/import/weread.md','/import/kindle.md','/import/google-book.md'],
          },
        ],
        '/methodology': [
          {
            text: '方法论',
            children: ['/methodology/README.md', '/methodology/zettelkasten.md', '/methodology/5r.md','/methodology/mindmap.md', '/methodology/jiugongge.md', '/methodology/ria.md'],
          },
        ],
        '/thoughts': [
          {
            text: '',
            children: ['/thoughts/README.md', '/thoughts/temporary-collection-box.md'],
          },
        ],
      },
  }),
})