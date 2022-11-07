import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: 'zh-CN',
  title: 'Exadocs',
  description: 'Exagear installationn documents, now in vuepress.',
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Exadocs",
      description: "Exagear 安装文档，使用 vuepress 驱动.",
    },
  },

  theme,

  shouldPrefetch: false,
});
