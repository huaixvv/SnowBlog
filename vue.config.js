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

  // pwa:{
  //   iconPaths:{
  //    favicon32: './public/title.png',
  //    favicon16: './public/title.png',
  //    appleTouchIcon: './public/title.png',
  //    maskIcon: 'favicon.ico',
  //    msTileImage: 'favicon.ico'
  //   }
  //  },
}