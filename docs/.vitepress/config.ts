import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button', link: '/components/button' },
        { text: 'Tree 树', link: '/components/button/' },
      ]
    }
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
