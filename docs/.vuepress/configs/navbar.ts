import { NavbarConfig } from "vuepress";
const nav: NavbarConfig = [
  {
    text: "主页",
    link: "/",
  },
  {
    text: "前端技术",
    children: [
      {
        text: "html",
        link: "/html",
      },
      {
        text: "css",
        link: "/css",
      },
      {
        text: "JavaScript",
        link: "/js",
      },
      {
        text: "框架",
        children: [
          {
            text: "vue",
            link: "/frame/vue",
          },
          {
            text: "vite",
            link: "/vite",
          },
          {
            text: "nuxt",
            link: "/nuxt",
          },
        ],
      },
      {
        text: "项目总结",
        children: [
          {
            text: "仿掘金项目",
            link: "/summary/juejin",
          },
          {
            text: "数据可视化",
            link: "/summary/view",
          },
        ],
      },
    ],
  },
  {
    text: "GitHub",
    link: "https://github.com/maiiitian",
  },
];
export default nav;
