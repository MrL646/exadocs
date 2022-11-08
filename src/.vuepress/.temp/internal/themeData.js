export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$qXs5tMNhMUB4nujFXeUXD.qUUhs6zIASu2eGPbU1heKTXy7OwlYI2\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/\":[\"\",{\"text\":\"指南\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"安装\",\"icon\":\"creative\",\"link\":\"inst\"},{\"text\":\"配置\",\"icon\":\"config\",\"link\":\"conf\"},{\"text\":\"注意事项\",\"icon\":\"restrict\",\"link\":\"touhou\"}]}]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"MrLiu646\",\"url\":\"https://mrl646.netlify.app\"},\"copyright\":\"MIT Licensed\",\"logo\":\"/favicon.ico\",\"repo\":\"MrL646/exadocs\",\"docsDir\":\"demo/theme-docs/src\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[\"/\",{\"text\":\"指南\",\"icon\":\"creative\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"安装\",\"link\":\"inst\"},{\"text\":\"配置\",\"link\":\"conf\"},{\"text\":\"注意事项\",\"link\":\"touhou\"}]},{\"text\":\"兼容性\",\"prefix\":\"/\",\"children\":[{\"text\":\"概览\",\"link\":\"compatibility/\"},{\"text\":\"设备兼容性\",\"link\":\"compatibility/for-devices\"}]},{\"text\":\"Exagear 下载\",\"prefix\":\"/\",\"icon\":\"cache\",\"children\":[{\"text\":\"建议的版本\",\"link\":\"down/\"},{\"text\":\"全部版本\",\"link\":\"down/all\"},{\"text\":\"解压缩工具\",\"link\":\"down/tools\"},{\"text\":\"百度云备用下载\",\"link\":\"down/baidu\"}]},{\"text\":\"游戏下载\",\"link\":\"https://down.thdog.moe\"}],\"footer\":\"默认页脚\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
