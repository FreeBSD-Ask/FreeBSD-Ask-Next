/**
 * @file config.ts
 * @brief Configuration of the book.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";
import { sideBarConfig } from "./configs";

export default defineUserConfig({
  lang: "zh-CN",
  title: "FreeBSD 从入门到跑路",
  description: "FreeBSD 从入门到跑路",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
    sidebar: sideBarConfig,
  }),

  plugins: [
    docsearchPlugin({
      appId: "4KCP05N90H",
      apiKey: "938386dc0789ce87b047a5a589001913",
      indexName: "freebsdcn",
    }),
  ],
});
