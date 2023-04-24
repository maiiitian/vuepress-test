export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"前端技术\",\"children\":[{\"text\":\"html\",\"link\":\"/html\"},{\"text\":\"css\",\"link\":\"/css\"},{\"text\":\"JavaScript\",\"link\":\"/js\"},{\"text\":\"框架\",\"children\":[{\"text\":\"vue\",\"link\":\"/frame/vue\"},{\"text\":\"vite\",\"link\":\"/vite\"},{\"text\":\"nuxt\",\"link\":\"/nuxt\"}]},{\"text\":\"项目总结\",\"children\":[{\"text\":\"仿掘金项目\",\"link\":\"/summary/juejin\"},{\"text\":\"数据可视化\",\"link\":\"/summary/view\"}]}]},{\"text\":\"GitHub\",\"link\":\"https://github.com/maiiitian\"}],\"sidebar\":{\"/summary/juejin\":[{\"text\":\"仿掘金\",\"children\":[\"/summary/juejin/项目介绍.md\",\"/summary/juejin/开始一个Nuxt3项目.md\",\"/summary/juejin/文章目录.md\"]}]},\"docsBranch\":\"master\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
