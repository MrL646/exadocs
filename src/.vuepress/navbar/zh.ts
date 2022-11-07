import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  /*
  * default settings

  { text: "案例", icon: "discover", link: "/demo/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },

  */

 {
  text: "指南",
  icon: "creative",
  prefix: "/guide/",
  children: [
    { text: "安装", link: "inst" },
    { text: "配置", link: "conf" },
    { text: "注意事项", link: "touhou" },
  ]
 },
 {
   text: "兼容性",
   prefix: "/",
   children: [
    { text: "概览", link: "compatibility/" },
    { text: "设备兼容性", link: "compatibility/for-devices" }
   ]
  },
 {
  text: "Exagear 下载",
  prefix: "/",
  icon: "cache",
  children: [
    { text: "建议的版本", link: "down/" },
    { text: "全部版本", link: "down/all" },
    { text: "解压缩工具", link: "down/tools" },
    { text: "百度云备用下载", link: "down/baidu"}
  ] 
 },
 { text: "游戏下载", link:"https://down.thdog.moe" }
]);
