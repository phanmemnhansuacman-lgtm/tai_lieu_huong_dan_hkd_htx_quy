
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tài liệu hướng dẫn ACMan',
  tagline: 'Hộ kinh doanh - Quỹ tài chính - Hợp tác xã',
  favicon: 'img/logo-2.jpg',

  // ⚠️ Đổi thành domain thật khi deploy xong (ví dụ Vercel sẽ cấp 1 link dạng
  // https://ten-du-an.vercel.app, bạn thay vào đây sau khi deploy lần đầu).
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // 2 dòng dưới chỉ dùng khi deploy qua GitHub Pages (lệnh `docusaurus deploy`).
  // Vì bạn deploy qua Vercel nên 2 giá trị này không ảnh hưởng, có thể để nguyên.
  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    // @ts-ignore - @easyops-cn/docusaurus-search-local chưa khai báo type khớp chuẩn Docusaurus,
    // nhưng plugin vẫn hoạt động đúng khi build/chạy.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['vi', 'en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Trang chủ',
        logo: {
          alt: 'ACMan Logo',
          src: 'img/acman-logo-1.png',
        },
        items: [
          {
            to: '/coming-soon',
            label: 'Hộ kinh doanh',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hopTacXaSidebar',
            position: 'left',
            label: 'Hợp tác xã',
          },
          // Thêm lại 2 mục dưới đây khi đã có nội dung + sidebar cho từng mô hình:
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'quyTaiChinhSidebar',
          //   position: 'left',
          //   label: 'Quỹ tài chính',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'hopTacXaSidebar',
          //   position: 'left',
          //   label: 'Hợp tác xã',
          // },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} ACMan`,
        links: [
          {
            title: 'Liên hệ',
            items: [
              {
                html: '📍Phòng 1503, Tầng 15, Tòa nhà Vinaconex Diamond Số 459C Bạch Mai, Phường Bạch Mai, Thành phố Hà Nội.',
              },
              {
                html: '📞 Điện thoại: 0966 04 34 34',
              },
            ],
          },
          {
            title: 'Cộng đồng hỗ trợ',
            items: [
              {
                label: 'Khóa kế toán mới bắt đầu',
                href: 'https://zalo.me/g/uxcdbi356',
              },
              {
                label: 'ACMan hỗ trợ quyết toán thuế',
                href: 'https://zalo.me/g/udowsc205',
              },
              {
                label: 'Hỗ trợ khai thuế cho HKD',
                href: 'https://zalo.me/g/ihwrxp656',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  stylesheets: [
    {
      href: '/css/custom.css',
      type: 'text/css',
    },
  ],
};

export default config;