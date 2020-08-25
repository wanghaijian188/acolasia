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
      { text: 'js', link: '/js/about' },
      { text: 'Vue', link: '/vue/vue' },
      { text: '其他', items: [{ text: 'git', link: '/git/git' },{text:'Moment',link:'http://momentjs.cn'}] },
      { text: 'GtHub', link: 'https://github.com/WangHaijian180/acolasia' },
    ]
  },


}