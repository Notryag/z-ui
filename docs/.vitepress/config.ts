import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
export default {
  title: 'ZUI',
  base: '/',
  themeConfig: {
    nav: [{ text: '文档', link: '/guild/introduce' }],
    sidebar: {
      '/': [
        {
          text: '引入',
          items: [
            {
              text: '介绍',
              link: '/guild/introduce'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        },
        {
          text: '组件',
          items: [
            {
              text: 'button',
              link: '/components/button'
            },
            {
              text: 'icon',
              link: '/components/icon'
            },

            {
              text: 'checkbox',
              link: '/components/checkbox'
            },
            {
              text: 'switch',
              link: '/components/switch'
            },
            {
              text: 'Tabs',
              link: '/components/tabs'
            },
            {
              text: 'Crumb',
              link: '/components/crumb'
            },
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Notryag/z-ui' }]
  },
  // 以下是新增的
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()],
    resolve: { }
  }
};
