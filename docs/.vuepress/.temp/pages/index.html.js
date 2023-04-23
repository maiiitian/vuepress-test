export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"actions\":[{\"text\":\"最近\",\"link\":\"/summary\",\"type\":\"primary\"},{\"text\":\"框架技术\",\"link\":\"/frame\",\"type\":\"secondary\"},{\"text\":\"框架技术\",\"link\":\"/frame\",\"type\":\"secondary\"},{\"text\":\"项目总结\",\"link\":\"/summary\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"待办\",\"details\":\"重构本项目\"},{\"title\":\"封装组件并使用\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"问题\",\"details\":\"能不能把笔记们连在另一个仓库，因为另外有个笔记仓库\"},{\"title\":\"主题\",\"details\":\"看看改不改\"},{\"title\":\"Plugins\",\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":\"Bundlers\",\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}],\"footer\":\"Copyright © 2023\"},\"headers\":[],\"git\":{\"updatedTime\":1682227033000,\"contributors\":[{\"name\":\"maiiitiam\",\"email\":\"mugibatake99@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
