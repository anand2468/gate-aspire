import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GATE Aspire | Free GATE Preparation, Courses, Test Series & Notes',
  tagline: 'Free GATE Exam Preparation Platform: Computer Science Courses, Topic-wise Test Series, Solved PYQs & Notes',
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

  clientModules: ['./src/clientModules/gtagInit.ts'],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        if (typeof window.gtag !== 'function') {
          window.gtag = function(){ window.dataLayer.push(arguments); };
        }
      `,
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': 'https://gateaspire.in/#website',
            'url': 'https://gateaspire.in/',
            'name': 'GATE Aspire',
            'description': 'Free GATE Preparation Platform: Computer Science Courses, Topic-wise Test Series, Solved PYQs & Notes',
            'publisher': {
              '@type': 'EducationalOrganization',
              'name': 'GATE Aspire',
              'url': 'https://gateaspire.in/'
            }
          },
          {
            '@type': 'EducationalOrganization',
            '@id': 'https://gateaspire.in/#organization',
            'name': 'GATE Aspire',
            'url': 'https://gateaspire.in/',
            'logo': 'https://gateaspire.in/img/gate-aspire-logo.png',
            'description': 'Free online platform for GATE Computer Science preparation, courses, test series, and study materials.'
          }
        ]
      }),
    },
  ],

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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.8,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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
        alt: 'Gate Aspire Logo',
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
          label: 'Contribute',
          position: 'right',
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
      {
        name: 'keywords',
        content:
          'GATE preparation, GATE test series, GATE course, GATE Computer Science, GATE CSE notes, GATE mock test, GATE pyq solved questions, free GATE course, GATE exam syllabus, GATE preparation online, GATE Discrete Mathematics, GATE Operating Systems, GATE Engineering Mathematics, GATE Digital Logic, GATE C Programming',
      },
      {
        name: 'description',
        content:
          'Crack GATE Computer Science with free subject courses, topic-wise test series, solved previous year questions (PYQs), formulas, and comprehensive preparation notes.',
      },
      {name: 'author', content: 'GATE Aspire'},
      {name: 'robots', content: 'index, follow'},
      {property: 'og:site_name', content: 'GATE Aspire'},
      {property: 'og:type', content: 'website'},
      {property: 'og:locale', content: 'en_US'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'GATE Aspire - Free GATE Preparation, Courses & Test Series'},
      {
        name: 'twitter:description',
        content:
          'Comprehensive free GATE exam preparation: Computer Science courses, topic-wise test series, solved PYQs, and structured subject notes.',
      },
      {name: 'twitter:image', content: 'https://gateaspire.in/img/og_image.png'},
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
