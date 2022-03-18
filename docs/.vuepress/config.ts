/**
 * @file config.ts
 * @brief Configuration for the book.
 * @copyright Copyright (c) 2022 The FreeBSD Ask Authors. All rights reserved.
 */

import type { DefaultThemeOptions } from 'vuepress'
import { defineUserConfig } from 'vuepress'
import { sideBar } from "./configs"

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'zh-CN',
  title: 'FreeBSD 从入门到跑路',
  description: 'FreeBSD 从入门到跑路',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: sideBar
  },
})
