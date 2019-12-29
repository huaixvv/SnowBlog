module.exports = {
  configureWebpack: {

    //配置别名
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'assets/img/favicon.ico',
      favicon16: 'assets/img/favicon.ico',
      appleTouchIcon: 'assets/img/favicon.ico',
      maskIcon: 'assets/img/favicon.ico',
      msTileImage: 'assets/img/favicon.ico'
    }
  }
}