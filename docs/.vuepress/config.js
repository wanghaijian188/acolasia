const moment = require('moment');

module.exports = {
  title: 'ACOLASIA',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
  themeConfig: {
    logo: '/assets/img/logosy.jpg',
    lastUpdated: '更新时间',
    nav: [
      { text: 'css', link: '/css/style' },
      { text: 'js', items: [{ text: 'javaScript', link: '/js/about' }, { text: '时间', link: '/date/date' }] },
      { text: 'Vue', link: '/vue/vue' },
      { text: '后端', items: [{ text: 'java', link: '/java/java' }] },
      { text: '数据库', link: '/vue/vue' },
      { text: '其它', items: [{ text: 'vueCLI', link: '/vue/vueCLI' }, { text: '宝典', link: '/bible/vue' }, { text: '微信小程序', link: '/wx/wx' }, { text: 'git', link: '/git/git' }, { text: 'gspa', link: 'https://greensock.com/' }, { text: 'Moment', link: 'http://momentjs.cn' }] },
      { text: 'GtHub', link: 'https://github.com/WangHaijian180/acolasia' },
    ],
    sidebar: [
      'bible/vue',
      'bible/js',
      'bible/css',
      'bible/Statuscode'
    ]
  },


}