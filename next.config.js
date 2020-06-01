const withImages = require('next-images')
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withImages,
  withCSS(withSass())
]);
