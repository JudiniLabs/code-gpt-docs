// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { ProvidePlugin } = require("webpack");
const path = require("path");

const examplesPath = path.resolve(__dirname, "..", "examples", "src");
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeGPT',
  tagline: 'Easily Connect to Top AI Providers Using Their Official APIs in VSCode',
  url: 'https://docs.codegpt.co/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codegpt', // Usually your GitHub org/user name.
  projectName: 'code-gpt-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
 // i18n: {
   // defaultLocale: 'en',
    //locales: ['en', 'es', 'pt', 'fr', 'ko', 'zh-Hans'],
 // },
  customFields:{
    mendableAnonKey: process.env.MENDABLE_ANON_KEY,
  },
  plugins: [
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => ({
        plugins: [
          new ProvidePlugin({
            process: require.resolve("process/browser"),
          }),
        ],
        resolve: {
          fallback: {
            path: false,
            url: false,
          },
          alias: {
            "@examples": examplesPath,
          },
        },
        module: {
          rules: [
            {
              test: examplesPath,
              use: "raw-loader",
            },
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
      }),
    })
  ],
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
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'CodeGPT',
        logo: {
          alt: 'CodeGPT',
          src: 'img/mini_gpt_circle.png',
          href: '/docs/intro',
          target: '_self',
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
          {
            href: 'https://discord.gg/vgTGsVr69s',
            label: 'Discord',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          // },
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
              // {
              //   label: 'Reddit',
              //   href: 'https://www.reddit.com/r/CodeGPT_VSCode/',
              // },
              // {
              //   label: 'Facebook Group',
              //   href: 'https://www.facebook.com/groups/1590127588169761',
              // },
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
                label: 'VSCode Extension',
                href: 'https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt',
              },
              {
                label: 'JetBrains',
                href: 'https://plugins.jetbrains.com/plugin/24372-codegpt-chat--ai-agents',
              },
              {
                label: 'CodeGPT on Open VSX',
                href: 'https://open-vsx.org/extension/DanielSanMedium/dscodegpt'
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/davila7/code-gpt-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeGPT`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
