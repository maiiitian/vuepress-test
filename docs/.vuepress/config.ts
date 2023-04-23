import { defineUserConfig, defaultTheme } from "vuepress";
import nav from "./configs/navbar";

export default defineUserConfig({
  base: "/vuepress-test/",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    // default theme config
    navbar: nav,
    docsBranch: "master",
  }),
});
