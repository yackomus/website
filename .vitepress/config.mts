import {defineConfig} from "vitepress";
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yackomus",
  titleTemplate: 'Yackomus', // costum sufix
  description: "Coleções de dados extraídos de portais oficiais do Governo Federal, Institutos e Instituições Oficiais, Câmara Federal e Senado Federal.",
  head:[
    // ['link', {rel: 'icon', href: '/favicon.png'}],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JL3G0RBEG0' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JL3G0RBEG0');`
    ]
  ],
  lang: 'pt-BR',
  srcDir: 'src',
  outDir: './docs',
  base: '/',
  lastUpdated: false,
  cleanUrls: true,
  themeConfig: {
    // logo: '/yackomus-subject.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Sobre', link: '/sobre'},

      { 
        text: 'Home', 
        link: '/', 
        target: '_self', 
        activeMatch: '/config/'
    
      },

      { 
        text: 'Blog', 
        link: 'https://www.blog.yackomus.com/', 
        // target: '_self', 
        activeMatch: '/config/'
    
      },

      { 
        text: 'Informações', 
        items: [
          {text:'População',link: '/info/populacao',activeMatch: '/config/'},
          {text:'Território',link: '/info/municipios',activeMatch: '/config/'},
          {text:'Programas Sociais',link: '/info/bolsa-familia',activeMatch: '/config/'},
          {text:'Brasília',link: '/info/deputados-federais',activeMatch: '/config/'},
        ],    
      },

    ],

    sidebar: [

      // {
      //   text: 'Blog',
      //   link: 'https://www.blog.yackomus.com/', 
      // },

      {
        text: 'Informações',
        // link: '/atlas',
        collapsed: false,
        items: [
          { 
            text: 'População',
            link: '/info/populacao',
            // items: [
            //   { text: 'Brasil', link: '/atlas' },
            // ],
          },

          { 
            text: 'Território',
            collapsed:true,
            // link: '/info/municipios',
            items: [
              { text: 'Municípios', link: '/info/municipios' },
            ],
          },

          { 
            text: 'Programas Sociais',
            collapsed:true,
            // link: '/info/bolsa-familia',
            items: [
              { text: 'Bolsa Família', link: '/info/bolsa-familia' },
            ],
          },

          { 
            text: 'Brasília',
            collapsed:true,
            // link: '/info/deputados-federais',
            items: [
              { text: 'Deputados Federais', link: '/info/deputados-federais' },
            ],
          },

        ]
      },

    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/yackomus' },
      { icon: 'youtube', link: 'https://youtube.com/@yackomus' },
      { icon: 'x', link: 'https://x.com/yackomus' },      
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
    sidebarMenuLabel: 'Menu',
    // returnToTopLabel: 'Top',
    externalLinkIcon: true,

  },
})

function logo() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
	<path d="M5.37 20q-.553 0-.942-.387q-.39-.387-.39-.94v-1.727l3.54-3.146V20zm3.053 0v-3.538h7.154V20zm8 0v-7.267L12.61 9.366l2.679-2.368l4.23 3.744q.212.206.327.46q.116.255.116.543v6.923q0 .553-.387.943t-.94.389zM4.039 15.788v-4.03q0-.287.115-.551t.327-.465l6.635-5.88q.2-.181.424-.259q.225-.078.461-.078t.46.078t.424.259l1.769 1.582z" />
</svg>`;
}

