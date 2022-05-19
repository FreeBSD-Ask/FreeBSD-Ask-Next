/**
 * @file config.ts
 * @brief Configuration of the book.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";
import { sideBarConfig } from "./configs";

export default defineUserConfig({
  lang: "zh-CN",
  title: "FreeBSD 从入门到跑路",
  description: "FreeBSD 从入门到跑路",

  theme: defaultTheme({
    logo: "https://book.freebsdcn.org/favicon.ico",
    sidebar: sideBarConfig,
  }),

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
