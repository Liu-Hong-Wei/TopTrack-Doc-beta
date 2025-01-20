import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TrackTop Doc demo",
  description: "A demo doc for TrackTop",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide' },
      { text: '参考', link: '/reference' },
      { text: '关于', link: '/about' },
      { text: 'Markdown 示例(temp)', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
