import { defineConfig } from 'vitepress';

const BASE_URL = '/scientia';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Scientia',
  description: 'USC DCISM Notes Repository',
  cleanUrls: true,
  base: `${BASE_URL}/`,
  head: [['link', { rel: 'icon', href: `${BASE_URL}/favicon.ico` }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/usc-cisco/scientia' },
      { icon: 'facebook', link: 'https://www.facebook.com/cisco.usc' },
    ],

    editLink: {
      pattern: 'https://github.com/usc-cisco/scientia/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },
});
