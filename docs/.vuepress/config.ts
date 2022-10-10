/**
 * @file config.ts
 * @brief Configuration of the book.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from '@vuepress/cli'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

import {sideBarConfig} from './configs'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'FreeBSD 从入门到跑路',
  description: 'FreeBSD 从入门到跑路',

  theme: defaultTheme({
    logo: '/favicon.ico',
    sidebar: sideBarConfig,
    docsRepo: 'https://github.com/FreeBSD-Ask/FreeBSD-Ask',
    docsBranch: 'main',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-31WQ8W3FF6',
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
    sitemapPlugin({
      hostname: 'https://book.bsdcn.org',
    }),
    seoPlugin({
      hostname: 'https://book.bsdcn.org',
    }),
  ],
});
