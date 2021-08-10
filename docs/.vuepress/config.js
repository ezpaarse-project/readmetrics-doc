const { path } = require('@vuepress/utils');
const { navbar, sidebar } = require('./configs');

module.exports = {
  title: 'ReadMETRICS',
  description: 'ReadMETRICS Documentation',
  base: '/readmetrics/',

  head: [
    [
      'link',
      { 
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/icons/icon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/icon-32x32.png`,
      },
    ],
    ['meta', { name: 'application-name', content: 'ReadMETRICS' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ReadMETRICS' }],
  ],

  lang: 'en-US',

  locales: {
    '/': {
      lang: 'en-US',
    },
    '/fr/': {
      lang: 'fr-FR',
    },
  },

  themeConfig: {
    repo: 'ezpaarse-project/readmetrics-scripts',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',

    contributors: false,

    logo: '/images/icons/icon-192x192.png',

    locales: {
      '/': {
        lang: 'en-US',
        editLinkText: 'Edit this page on GitHub',

        sidebar: sidebar.en,

        navbar: navbar.en,
      },
  
      '/fr/': {
        lang: 'fr-FR',
        selectLanguageText: 'Langues',
        selectLanguageName: 'Français',
        selectLanguageAriaLabel: 'Français',
        editLinkText: 'Editer cette page sur GitHub',

        lastUpdatedText: 'Dernière mise à jour',
        contributorsText: 'Contributeurs',

        tip: 'Astuce',
        warning: 'Attention',
        danger: 'Danger',

        backToHome: 'Retour à l\'accueil',
        notFound: [
          'Il n\'y a rien ici.',
        ],

        openInNewWindow: 'Ouvrir dans une nouvelle fenêtre',
        toggleDarkMode: 'Changer de thême',

        sidebar: sidebar.fr,

        navbar: navbar.fr,
      },
    },
  },

  plugins: [
    ['@vuepress/plugin-back-to-top'],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
};
