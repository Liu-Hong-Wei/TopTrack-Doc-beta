import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ByteTop 官方文档",
  description: "A demo doc for TrackTop",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "数据平台", link: "/guide/" },
      { text: "SDK 文档", link: "/sdk/" },
      { text: "关于", link: "/about/" },
      { text: "Markdown 示例(temp)", link: "/temp-md-examples/api-examples" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "开始使用", link: "/guide/get-started" },
          ],
        },
      ],

      "/sdk/": [
        {
          text: "SDK 文档",
          items: [
          ],
        },
      ],

      "/about/": [
        {
          text: "关于",
        },
      ],

      "/temp-md-examples/": [
        {
          text: "Markdown 示例",
          items: [
            { text: "API Examples", link: "/temp-md-examples/api-examples" },
            { text: "Markdown Examples", link: "/temp-md-examples/markdown-examples" },
          ],
        },
      ],
    },

    editLink: {
      pattern: "https://github.com/Liu-Hong-Wei/TopTrack-Doc-beta/docs/edit/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Mzz2022/ByteTop" },
    ],
  },
});
