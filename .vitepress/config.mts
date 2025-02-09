import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yackomus",
  titleTemplate: 'Yackomus', // costum sufix
  description: "Yackomus - Personal Website",
  head:[['link', {rel: 'icon', href: '/favicon.png'}]],
  lang: 'pt-BR',
  srcDir: 'src',
  outDir: './docs',
  base: '/',
  lastUpdated: false,
  themeConfig: {
    logo: '/yackomus-subject.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Sobre', link: '/sobre'},
      { text: 'Atlas', link: '/atlas'},
      { text: 'Cronus', link: '/cronus'},
      // { text: 'Gaia', link: 'https://www.gaia.yackomus.com/', activeMatch: '/config/' },
      // {
      //   text: 'Menu',
      //   items: [
      //     { text: 'Home', link: '/'},
      //     { text: 'Sobre', link: '/sobre' },
      //     { text: 'Atlas', link: '/atlas'},
      //     // { text: 'Mamon', link: '/economia/index'},
      //     // { text: 'Hephaestus', link: '/economia/index'}
      //   ]
      // }
    ],

    // sidebar: [
    //   {
    //     text: 'Sobre',
    //     link: '/sobre/index',
    //   },
    //   {
    //     text: 'Atlas',
    //     // link: '/atlas/index',
    //     items: [
    //       { text: 'Brasil', link: '/atlas/' },
    //     ]
    //   },
    // //   {
    // //     text: 'Economia',
    // //     link: '/economia/index',
    // //     items: [
    // //     //   { text: 'Bolsa Família', link: '/markdown-examples' },
    // //     //   { text: 'Markdown Examples', link: '/markdown-examples' },
    // //     //   { text: 'Runtime API Examples', link: '/api-examples' }
    // //     ]
    // //   }
    // ],

    socialLinks: [
      // { icon: 'x', link: 'https://x.com/yackomus' },
      // { icon: 'github', link: 'https://github.com/yks-yackomus' },
      { icon: 'instagram', link: 'https://instagram.com/yackomus' },
      
    ],

    footer: {
      // message: 'MIT License',
      copyright: 'Copyright © 2025 Yackomus',
    },

    // lastUpdated: {
    //   // text: 'Atualizado',
    //   formatOptions: {
    //     dateStyle: 'full',
    //     timeStyle: 'medium'
    //   }
    // },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    // outline: {
    //   label: 'Index'
    // },

    // darkModeSwitchLabel: 'Lumen',
    // sidebarMenuLabel: 'Temas',
    // returnToTopLabel: 'Top',
    externalLinkIcon: true,

  },
})

function logo() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
	<path d="M5.37 20q-.553 0-.942-.387q-.39-.387-.39-.94v-1.727l3.54-3.146V20zm3.053 0v-3.538h7.154V20zm8 0v-7.267L12.61 9.366l2.679-2.368l4.23 3.744q.212.206.327.46q.116.255.116.543v6.923q0 .553-.387.943t-.94.389zM4.039 15.788v-4.03q0-.287.115-.551t.327-.465l6.635-5.88q.2-.181.424-.259q.225-.078.461-.078t.46.078t.424.259l1.769 1.582z" />
</svg>`;
}

