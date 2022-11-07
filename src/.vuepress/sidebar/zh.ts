import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

/*
  "/": [
    "",
    {
      text: "指南",
      prefix: "/guide/",
      children: [
        { text: "安装", icon: "creative", link: "inst" },
        { text: "配置", icon: "config", link: "conf" },
      ]
    },
    "slides",
  ],
*/

  "/": [
    "",
    {
      text: "指南",
      prefix: "/guide/",
      children: [
        { text: "安装", icon: "creative", link: "inst" },
        { text: "配置", icon: "config", link: "conf" },
        { text: "注意事项", icon: "restrict", link: "touhou" }
      ]
    },
    /*
    "slides",
    */
  ],
});
