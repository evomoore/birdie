const withCSS = require('@zeit/next-css')
require('dotenv').config()

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL
  },
  cssLoaderOptions: {
    url: false
  }
});
