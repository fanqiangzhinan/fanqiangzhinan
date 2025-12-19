import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '翻墙指南',
  tagline: '小白翻墙指南：VPN、机场、自建代理服务器完整教程，帮助您安全稳定地访问国外网站',
  favicon: 'img/fq.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.fanqiang.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fanqiang', // Usually your GitHub org/user name.
  projectName: 'fanqiang', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // SEO metadata
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: '翻墙,科学上网,VPN,机场,代理,梯子,V2Ray,Shadowsocks,Clash,翻墙教程,科学上网教程,代理服务器,自建梯子,翻墙指南,翻墙方法,科学上网方法,代理客户端,Clash Verge,Sing-box,Shadowsocks客户端',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '翻墙指南和科学上网教程。提供VPN推荐、机场选择、自建节点、代理客户端使用等完整教程，帮助您安全、稳定地访问国外网站。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: '翻墙指南',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'googlebot',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'language',
        content: 'zh-CN',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'revisit-after',
        content: '7 days',
      },
    },
    // Open Graph tags
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: '翻墙指南 - 科学上网完整教程',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: '翻墙指南和科学上网教程。提供VPN推荐、机场选择、自建节点、代理客户端使用等完整教程，帮助您安全、稳定地访问国外网站。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://fanqiang.wiki',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: '翻墙指南',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://fanqiang.wiki/img/fq.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:width',
        content: '1200',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:height',
        content: '630',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'zh_CN',
      },
    },
    // Twitter Card tags
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: '翻墙指南 - 科学上网完整教程',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: '翻墙指南和科学上网教程。提供VPN推荐、机场选择、自建节点、代理客户端使用等完整教程，帮助您安全、稳定地访问国外网站。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://fanqiang.wiki/img/fq.png',
      },
    },
    // Structured Data (JSON-LD)
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '翻墙指南',
        url: 'https://fanqiang.wiki',
        description: '翻墙指南和科学上网教程。提供VPN推荐、机场选择、自建节点、代理客户端使用等完整教程，帮助您安全、稳定地访问国外网站。',
        inLanguage: 'zh-CN',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://fanqiang.wiki/?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '翻墙指南',
        url: 'https://fanqiang.wiki',
        logo: 'https://fanqiang.wiki/img/fq.png',
        description: '翻墙指南和科学上网教程',
      }),
    },
    // Google Search Console verification (add your verification code here)
    // {
    //   tagName: 'meta',
    //   attributes: {
    //     name: 'google-site-verification',
    //     content: 'YOUR_VERIFICATION_CODE_HERE',
    //   },
    // },
  ],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    localeConfigs: {
      zh: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
      },
    },
  },
  plugins: [],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            // Increase priority for main pages
            return items.map((item) => {
              if (item.url === 'https://fanqiang.wiki/' || item.url === 'https://fanqiang.wiki') {
                return {...item, priority: 1.0, changefreq: 'daily'};
              }
              // Increase priority for important category pages
              if (item.url.includes('/vpn') || item.url.includes('/airport') || item.url.includes('/client')) {
                return {...item, priority: 0.9, changefreq: 'weekly'};
              }
              return item;
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/fq.png',
    metadata: [
      {name: 'keywords', content: '翻墙,科学上网,VPN,机场,代理,梯子,翻墙教程,科学上网教程,代理服务器,自建梯子'},
      {name: 'author', content: '翻墙指南'},
      {name: 'theme-color', content: '#25c2a0'},
    ],
    navbar: {
      title: '翻墙指南',
      logo: {
        alt: '翻墙指南 Logo',
        src: 'img/fq.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        // autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
