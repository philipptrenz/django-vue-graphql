const BundleTracker = require("webpack-bundle-tracker");

const pages = {
  'vue_index': {
    entry: './src/pages/index/index.js',
    chunks: ['chunk-vendors']
  },
  'vue_login': {
    entry: './src/pages/login/login.js',
    chunks: ['chunk-vendors']
  },
}

const pluginOptions = {
  apollo: { 
    lintGQL: true 
  } 
}

module.exports = {
  pages: pages,
  filenameHashing: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/static/vue/'
    : 'http://localhost:8080/',
  outputDir: '../frontend/static/vue/',
  pluginOptions: pluginOptions,
  chainWebpack: config => {

    config.optimization
      .splitChunks({
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "chunk-vendors",
            chunks: "all",
            priority: 1
          },
        },
      });

    Object.keys(pages).forEach(page => {
      config.plugins.delete(`html-${page}`);
      config.plugins.delete(`preload-${page}`);
      config.plugins.delete(`prefetch-${page}`);
    })

    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: '../frontend/webpack-stats.json' }]);

    config.resolve.alias
      .set('__STATIC__', 'static/vue')

    config.devServer
      .public('http://localhost:8080')
      .host('localhost')
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["*"] })

  }
};