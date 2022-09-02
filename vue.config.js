const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const cpns = path.join(__dirname, '/src/components')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    },
    resolve: {
      alias: {
        cpns
      }
    }
  }
})
