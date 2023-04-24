import { defineUserConfig, defaultTheme } from "vuepress";
import nav from "./configs/navbar";
import { sidebar } from "./configs/sidebar";

export default defineUserConfig({
  base: "/vuepress-test/",
  title: "Naitiam的博客 ！",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    // default theme config
    navbar: nav,
    sidebar: sidebar,
    docsBranch: "master",
  }),
});
