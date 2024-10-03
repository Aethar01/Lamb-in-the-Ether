import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lamb in the Ether',
  tagline: 'The home of TTRPG projects by LitE',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Lamb-in-the-Ether.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/home/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Lamb-in-the-Ether', // Usually your GitHub org/user name.
  projectName: 'home', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/LambintheEther.jpg',
    navbar: {
      title: 'Lamb in the Ether',
      logo: {
        alt: 'Akaron, a star of Arth\'Galad',
        src: 'img/sun-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'safKaalWikiSidebar',
          position: 'left',
          label: 'SafKaal Wiki',
        },
        {
            type: 'dropdown',
            label: 'Projects',
            position: 'left',
            items: [
              {
                label: 'Bastion',
                to: '/docs/bastion/',
              },
              {
                label: 'Wizard Politics',
                to: '/docs/wizardPolitics/',
              },
              {
                label: 'Project D',
                to: '/docs/projectD/',
              }
            ],
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://lamb-in-the-ether.itch.io/',
          label: 'itch',
          position: 'right',
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
              label: 'Safkaal Wiki',
              to: '/docs/safKaalWiki/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/y6nZKTEZ9J',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lambintheether',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Lamb-in-the-Ether',
            },
            {
                label: 'itch',
                href: 'https://lamb-in-the-ether.itch.io/',
            },
            {
                label: 'About Us',
                to: '/docs/aboutus',
            }
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Lamb in the Ether, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
