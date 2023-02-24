import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Exadocs',
  description: 'Just playing around.',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Exadocs',
    footer: {
      message: '',
      copyright: '<!-- <div>MIT Licensed | Copyright © --> 2023 MrLiu646</div>'
    },
    nav: [
       {
        text: "指南",
        items: [
          { text: "安装", link: "/guide/inst" },
          { text: "配置", link: "/guide/conf" },
          { text: "注意事项", link: "/guide/touhou" },
        ]
       },
       {
         text: "兼容性",
         items: [
          { text: "概览", link: "/compatibility/" },
          { text: "设备兼容性", link: "/compatibility/for-devices" }
         ]
        },
       {
        text: "Exagear 下载",
        items: [
          { text: "建议的版本", link: "/down/" },
          { text: "全部版本", link: "/down/all" },
          { text: "解压缩工具", link: "/down/tools" },
          { text: "百度云备用下载", link: "/down/baidu"}
        ] 
       },
       { text: "游戏下载", link:"https://down.thdog.moe" }
    ],
    sidebar: [
      {
        text: "指南",
        items: [
          { text: "安装", link: "/guide/inst" },
          { text: "配置", link: "/guide/conf" },
          { text: "注意事项", link: "/guide/touhou" }
        ]
      },
    ]
  }
})