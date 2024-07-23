module.exports = {
  title: "Arvind",
  tagline: "Learning is a Lifelong Process",
  url: "https://Arvind-2929.github.io",
  baseUrl: "/",
  //onBrokenLinks: "throw",
  //onBrokenMarkdownLinks: "warn",
  favicon: "https://avatars.githubusercontent.com/u/176428631?v=4",
  organizationName: "Arvind-2929", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "Arvind",
      logo: {
        alt: "My Site Logo",
        src: "https://avatars.githubusercontent.com/u/176428631?v=4",
      },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        // { type: "localeDropdown", position: "right" },
        // { to: "blog", label: "Blog", position: "right" },

        {
          href: "https://github.com/Arvind-2929",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social Media",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/arvind-kumar-5b5503261/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/ARVINDSAU2929/",
            },
          ],
        },
        // {
        //   title: "Docusaurus",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Arvind-2929/portfolio",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arvind.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          path: "./blog",
          //routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn"],
    localeConfigs: {
      en: {
        label: "English",
      },
      "zh-cn": {
        label: "Hindi",
      },
    },
  },
};
