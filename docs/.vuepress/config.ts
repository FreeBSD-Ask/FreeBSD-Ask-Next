/**
 * @file config.ts
 * @brief Configuration of the book.
 * @copyright Copyright (c) 2022 The FreeBSD Ask Authors. All rights reserved.
 */

import type { DefaultThemeOptions } from "vuepress";
import { defineUserConfig } from "vuepress";
import { sideBarConfig } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: "zh-CN",
  title: "FreeBSD 从入门到跑路",
  description: "FreeBSD 从入门到跑路",

  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    sidebar: sideBarConfig,
  },

  // plugins and their config
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: { "/": { placeholder: "搜索" } },

        // exclude the summary page
        isSearchable: (page: { path: string }) => {
          return page.path !== "/SUMMARY.html";
        },
      },
    ],
  ],
});
