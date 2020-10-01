module.exports = {
    title: '芒果UI官网',
    description: '一个好用的UI组件库',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
          { text: '主页', link: '/' },
          { text: '文档', link: '/basic/install' },
          { text: 'GitHub', link: 'https://github.com/zhanzhan-da/mango-ui' },
        ],
        sidebar: [
          {
            title:'入门',
            collapsable: false, // 可选的, 默认值是 true,
            children: [
              '/basic/install',
              '/basic/usage',
            ]
          },
          {
            title: '组件',
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 0,    // 可选的, 默认值是 1
            children: [
              '/components/button',
              '/components/input',
              '/components/grid',
              '/components/layout',
              '/components/tabs',
              '/components/popover',
              '/components/toast',
              '/components/collapse',
            ],
          }
        ],
      }
  }