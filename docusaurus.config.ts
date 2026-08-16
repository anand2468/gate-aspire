import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'gate aspire',
  tagline: 'Everything You Need to Crack GATE.',
  favicon: 'img/gate-aspire-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://gateaspire.in',
  baseUrl: '/',

  organizationName: 'anand2468', // Usually your GitHub org/user name.
  projectName: 'gate-aspire', // Usually your repo name.

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath:"/",
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/anand2468/gate-aspire/blob/main',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog:false,
        theme: {
          customCss: './src/css/custom.css',
        },

        gtag: {
          trackingID: 'G-1VFLH70WF0',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/og_image.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gate Aspire',
      logo: {
        alt: 'My Site Logo',
        src: 'img/gate-aspire-logo.png',
      },
      items: [
        {
          type:"docSidebar",
          sidebarId:"emSidebar",
          label:"Engineering Maths",
          position:"left"},
        {
          type:"docSidebar",
          sidebarId:"dmSidebar",
          label: 'Discrete Maths',
          position:'left'
        },
        {
          type:"docSidebar",
          sidebarId:"osSidebar",
          label: 'Operating System',
          position:'left'
        },
        {
          type:"docSidebar",
          sidebarId:"dldSidebar",
          label: 'Digital Logic Design',
          position:'left'
        },
        {
          type:"docSidebar",
          sidebarId:"cSidebar",
          label:"C Programming",
          position:"left"
        },
        {
          href: 'https://github.com/anand2468/gate-aspire',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Foundation',
          items: [
            {
              label: 'Engineering Maths',
              to: '/em',
            },
            {
              label: 'Discrete Maths',
              to: '/dm'
            },
            {
              label: 'Digital Logic Design',
              to: '/dld'
            },
          ],
        },
        {
          title: 'Core Subjects',
          items: [
            {
              label: 'Operating System',
              to: '/os',
            },
            {
              label: 'C Programming',
              to: '/c',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/anand2468/gate-aspire',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Made with ❤️. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {name: 'keywords', content: 'GATE, GATE 2027, Gate preparation, gate pyq, gate previous questions, gate notes, gate workbook, free gate course'},
    ],

    docs: {
      sidebar: {
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,


  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP",
      crossorigin: "anonymous",
    },
  ],

};

export default config;
