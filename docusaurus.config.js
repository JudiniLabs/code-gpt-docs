// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Code GPT',
  tagline: 'Artificial intelligence inside your IDE with this open source extension',
  url: 'https://code-gpt-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codegpt', // Usually your GitHub org/user name.
  projectName: 'code-gpt-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','pt','es'], // es, fr, pt
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        gtag: {
          trackingID: 'G-GEEJMKY9EX',
          anonymizeIP: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Code GPT',
        logo: {
          alt: 'Code GPT',
          src: 'img/mini_gpt_circle.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: 'https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt', 
            label: 'Extension', 
            position: 'left'
          },
          // {
          //   href: 'https://github.com/davila7/code-gpt-docs',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vgTGsVr69s',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/CodeGPT_VSCode/',
              },
              {
                label: 'Facebook Group',
                href: 'https://www.facebook.com/groups/1590127588169761',
              },
              {
                label: 'Product Hunt',
                href: 'https://www.producthunt.com/posts/code-gpt'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Subscribe for updates',
                to: 'https://817715f5.sibforms.com/serve/MUIEAMf2kzgJKDLrfbc46jFqp1U2BCxtNd2G2YfHO_4Wdqvdj0FqFJzy7a-_iVFmCKBzuSIjfoqot4O8DJXEj288d_YmAXXYKQCe34E0CseCIq7Ozvg90PktET7eeGdlTtrSc5f4S4pMYkyrJdQRSjLyur5_l1r3mUyCbDahOq4M8Jc5Hy-c9ZX_wkX-qt5lH0ORt6ePXfyRrGZY',
              },
              {
                label: 'Code GPT Marketplace',
                href: 'https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt',
              },
              {
                label: 'Code GPT Open VSX',
                href: 'https://open-vsx.org/extension/DanielSanMedium/dscodegpt'
              },
              {
                label: 'Visual Studio Code',
                href: 'https://code.visualstudio.com/download',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/davila7/code-gpt-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code GPT Docs, Built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
