import type { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  "/summary/juejin": [
    {
      text: "仿掘金",
      children: [
        "/summary/juejin/项目介绍.md",
        "/summary/juejin/开始一个Nuxt3项目.md",
        "/summary/juejin/文章目录.md",
      ],
    },
  ],
};
