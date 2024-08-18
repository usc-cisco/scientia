import { defineConfig } from 'vitepress';
import { sidebar } from './sidebar';

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
      { text: 'Courses', link: '/courses' },
    ],

    sidebar,

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

    footer: {
      message:
        'For content removal requests, please contact us at dcism.sc@gmail.com',
      copyright:
        'Copyright © 2024, USC Computer and Information Sciences Council',
    },
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
