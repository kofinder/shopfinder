const webpack = require('webpack')
const path = require('path');
const withImages = require('next-images')
const withOptimizedImages = require("next-optimized-images");
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  // withOptimizedImages({
  //   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  //   webpack(config) {
  //     config.resolve.alias.images = path.join(__dirname, "assets/images");
  //     return config;
  //   },
  // }),
  withOptimizedImages,
  withCSS(withSass())
]);
