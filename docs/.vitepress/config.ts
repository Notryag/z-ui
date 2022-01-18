import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用'
    },
    {
      text: '导航',
    },
    {
      text: '反馈',
    },
    {
      text: '数据录入',
    },
    {
      text: '数据展示',
      children: [
        { text: 'Tree 树', link: '/components/button/' },
      ]
    },
    {
      text: '布局',
    },
  ]
}


const config = {
  themeConfig: {
    sidebar,
  },
  
  // 以下是新增的
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}


export default config
