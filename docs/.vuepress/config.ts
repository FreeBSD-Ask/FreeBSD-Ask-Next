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
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

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
   docsearchPlugin({
      appId: 'MZ41VSDUQ5',
      apiKey: '04a9684aba6690eb58ad1fb349a056b8',
      indexName: 'book-bsdcn',
	  locales: {
        "/": {
          placeholder: "搜索",
		   translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除搜索条件",
                resetButtonAriaLabel: "清除搜索条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "无搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试搜索",
                reportMissingResultsText: "没有找到应有的搜索结果？",
                reportMissingResultsLinkText: "点击反馈",
              },	  
	        },
          },
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
